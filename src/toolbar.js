import { effectsList } from "../effectsConfig.js";
import {
  getSelectedCategory,
  getSelectedTechInput,
  getSelectedTechnology,
  getSelectedCategoryInput,
  setSelectedCategory,
  setSelectedTechInput,
  setSelectedTechnology,
  setSelectedCategoryInput,
  setSelectedEffect,
} from "./state.js";
import { clearEffect, stopAnalysis } from "../BanubaPlayer.js";
import { startEffect, getImportedEffects } from "./effect.js";
import {
  effectControlBlock,
  handGesturesBlock,
  handGesturesTipBlock,
  heartRateBlock,
  testRulerBlock,
  categoriesBlock,
  categoriesButtonRight,
  categoriesButtonLeft,
  resetButton,
  techBlock,
  importMessageBlock,
  effectsBlock,
} from "./elements.js";

let controlBlock;
let controlFunc;
let curEventType;

const removeEffectControlHandler = () => {
  effectControlBlock.innerHTML = "";

  if (curEventType === "analyze") {
    stopAnalysis();
    handGesturesBlock.classList.add("hidden");
    handGesturesTipBlock.classList.add("hidden");
    heartRateBlock.classList.add("hidden");
    testRulerBlock.classList.add("hidden");
  } else if (curEventType) {
    controlBlock.removeEventListener(curEventType, controlFunc);
  }
};

const createEffectBlock = async (effects) => {
  let htmlBlock = "";

  const onEffectSelect = async (e) => {
    removeEffectControlHandler();
    await clearEffect();
    startEffect(e?.target.value ?? 0);
  };

  if (effects.length > 1) {
    for (let i in effects) {
      htmlBlock += `
        <div class="effect">
          <label>
            <input type="radio" name="effect" id="${i}" value="${i}">
              <div class="effect-icon__border">
                <img class="effect-icon" src="assets/icons/effects/${effects[i].icon}" alt="${effects[i].name}">
              </div>
          </label>
        </div>`;
    }

    effectsBlock.innerHTML = htmlBlock;
    effectsBlock.style.marginLeft =
      getSelectedCategoryInput().value === "facemorphing" ? "-60px" : null;

    document.querySelectorAll('input[name="effect"]').forEach((el, i) => {
      el.addEventListener("click", onEffectSelect);
      if (i === 0) el.click();
    });
  } else {
    effectsBlock.innerHTML = htmlBlock;
    await onEffectSelect();
  }
};

const createCategoryBlock = (categories) => {
  let htmlBlock = "";

  for (let category in categories) {
    htmlBlock += `
      <div class="category ${
        categories[category].label === "" ? "hidden" : ""
      }">
        <input type="radio" name="category" id="${category}" value="${category}">
        <label for="${category}">${categories[category].label}</label>
      </div>`;
  }

  categoriesBlock.innerHTML = htmlBlock;
  categoriesBlock.style.transform = "";

  let children = categoriesBlock.children;
  let totalWidth = 0;

  for (let i = 0; i < children.length; i++) {
    totalWidth += parseInt(children[i].offsetWidth, 10);
  }

  if (totalWidth > 1088) {
    categoriesBlock.classList.add("categories-long");
    categoriesButtonRight.classList.remove("hidden");
  } else {
    categoriesBlock.classList.remove("categories-long");
    categoriesButtonLeft.classList.add("hidden");
    categoriesButtonRight.classList.add("hidden");
  }

  const onCategorySelect = async (e) => {
    if (e.target === getSelectedCategoryInput()) {
      return;
    }

    stopAnalysis();

    hidePopups();

    setSelectedCategoryInput(e.target);
    setSelectedCategory(
      getSelectedTechnology().categories[getSelectedCategoryInput().value],
    );
    await createEffectBlock(getSelectedCategory().effects);
  };

  document.querySelectorAll('input[name="category"]').forEach((el, i) => {
    el.addEventListener("click", onCategorySelect);
    if (i === 0) el.click();
  });
};

const createTechBlock = () => {
  for (let tech in effectsList) {
    techBlock.innerHTML += `
      <div class="technology">
          <input type="radio" name="tech" id="${tech}" value="${tech}">
          <label for="${tech}">${effectsList[tech].label}</label>
      </div>`;
  }

  const onTechSelect = async (e) => {
    if (e.target === getSelectedTechInput()) {
      return;
    }

    hidePopups();

    importMessageBlock.classList.add("hidden");
    setSelectedTechInput(e.target);

    if (getSelectedTechInput().value === "import") {
      setSelectedTechnology({ label: "Imported", categories: {} });
      effectsList[getSelectedTechInput().value].effects.forEach((effect) => {
        getSelectedTechnology().categories[effect.name] = {
          label: effect.name,
          effects: [effect],
        };
      });

      if (!effectsList[getSelectedTechInput().value].effects.length) {
        importMessageBlock.classList.remove("hidden");
        removeEffectControlHandler();
        await clearEffect();
        effectsBlock.innerHTML = "";
      }
    } else {
      setSelectedTechnology(effectsList[getSelectedTechInput().value]);
    }

    createCategoryBlock(getSelectedTechnology().categories);

    if (resetButton.disabled) {
      resetButton.disabled = false;
    }
  };

  document.querySelectorAll('input[name="tech"]').forEach((el) => {
    el.addEventListener("click", onTechSelect);
  });
};

const hideElement = (element) => {
  element.classList.add("hidden");
};

const hidePopups = () => {
  hideElement(handGesturesBlock);
  hideElement(importMessageBlock);
  hideElement(heartRateBlock);
  hideElement(testRulerBlock);
};

const onResetButtonClick = async () => {
  stopAnalysis();
  await clearEffect();

  setSelectedCategory(null);
  setSelectedTechnology(null);
  getSelectedTechInput().checked = false;
  setSelectedTechInput(null);
  setSelectedEffect(null);
  setSelectedCategoryInput(null);

  hidePopups();

  effectsBlock.innerHTML = "";
  categoriesBlock.innerHTML = "";
  resetButton.disabled = !resetButton.disabled;
};

resetButton.addEventListener("click", onResetButtonClick);

createTechBlock();
getImportedEffects(effectsList);
