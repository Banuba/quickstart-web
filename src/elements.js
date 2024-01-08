export const spinner = document.querySelector(".start-screen__spinner");
export const startScreen = document.querySelector(".start-screen");
export const categoriesBlock = document.querySelector(".categories");
export const categoriesButtonLeft = document.querySelector(
  ".categories-button__left",
);
export const categoriesButtonRight = document.querySelector(
  ".categories-button__right",
);
export const handGesturesBlock = document.querySelector(".hand-gestures");
export const handGesturesTipBlock =
  document.querySelector(".hand-gestures-tip");
export const techBlock = document.querySelector(".technologies");
export const effectControlBlock = document.querySelector(".effect-control");
export const importMessageBlock = document.querySelector(".import-message");
export const heartRateBlock = document.querySelector(".heart-rate");
export const testRulerBlock = document.querySelector(".test-ruler");
export const effectsBlock = document.querySelector(".effects-list");
export const resetButton = document.querySelector("#reset-button");
export const muteButton = document.querySelector("#mute-button");
export const screenshotButton = document.querySelector("#screenshot-button");
export const recDurationBlock = document.querySelector("#rec-duration");
export const recButton = document.querySelector("#rec-button");
export const popups = document.querySelector("#popups");
export const webcamSourceButton = document.querySelector("#webcam");
export const imageSourceButton = document.querySelector("#image");
export const overlay = document.querySelector(".overlay");
export const fpsBlock = document.querySelector("#fps");

categoriesButtonLeft
  .querySelector(".categories-button__left-icon")
  .addEventListener("click", () => {
    categoriesButtonLeft.classList.add("hidden");
    categoriesButtonRight.classList.remove("hidden");
    categoriesBlock.style.transform = "translateX(0px)";
  });

categoriesButtonRight
  .querySelector(".categories-button__right-icon")
  .addEventListener("click", () => {
    categoriesButtonLeft.classList.remove("hidden");
    categoriesButtonRight.classList.add("hidden");
    categoriesBlock.style.transform = "translateX(-400px)";
  });

document
  .querySelector(".hand-gestures-tip__button")
  .addEventListener("click", () => {
    handGesturesTipBlock.classList.add("hidden");
    handGesturesBlock.classList.remove("hidden");
    handGesturesBlock.classList.remove("hidden");
  });

spinner.classList.add("hidden");
startScreen.querySelector(".start-screen__inner").classList.remove("hidden");
