import {effectsList} from "./effectsConfig.js";
import {importedEffectsList} from "./import/effectsList.js";
import {
  applyEffect,
  applyEffectParam,
  clearEffect,
  fps,
  getScreenshot,
  getSource,
  muteToggle,
  startAnalysis,
  startGame,
  startPlayer,
  startRecord,
  stopAnalysis,
  stopRecord
} from "./BanubaPlayer.js"

const startScreen = document.querySelector('.start-screen')
const webcamSourceButton = document.querySelector('#webcam')
const imageSourceButton = document.querySelector('#image')
const spinner = document.querySelector('.start-screen__spinner')
const overlay = document.querySelector('.overlay')
const techBlock = document.querySelector('.technologies')
const categoriesBlock = document.querySelector('.categories')
const categoriesButtonLeft = document.querySelector('.categories-button__left')
const categoriesButtonRight = document.querySelector('.categories-button__right')
const effectsBlock = document.querySelector('.effects-list')
const effectControlBlock = document.querySelector('.effect-control')
const handGesturesBlock = document.querySelector('.hand-gestures')
const handGesturesTipBlock = document.querySelector('.hand-gestures-tip')
const heartRateBlock = document.querySelector('.heart-rate')
const testRulerBlock = document.querySelector('.test-ruler')
const fpsBlock = document.querySelector('#fps')
const recDurationBlock = document.querySelector('#rec-duration')
const importMessageBlock = document.querySelector('.import-message')
const popups = document.querySelector('#popups')
const resetButton = document.querySelector('#reset-button')
const muteButton = document.querySelector('#mute-button')
const screenshotButton = document.querySelector('#screenshot-button')
const recButton = document.querySelector("#rec-button")


let selectedTechInput
let selectedCategoryInput

let selectedTechnology
let selectedCategory
let selectedEffect

let isSoundOn = 0
let isRecording = 0

let controlBlock
let controlFunc
let curEventType


const setEffectParam = async (params, value, arg) => {
  for (const param of params) {
    const s = arg ? `${param}({${arg}:${value}})` : `${param}(${value})`
    await applyEffectParam(s)
  }
}


const removeEffectControlHandler = () => {
  effectControlBlock.innerHTML = ''

  if (curEventType === 'analise') {
    stopAnalysis()
    handGesturesBlock.classList.add('hidden')
    handGesturesTipBlock.classList.add('hidden')
    heartRateBlock.classList.add('hidden')
    testRulerBlock.classList.add('hidden')
  } else if (curEventType) {
    controlBlock.removeEventListener(curEventType, controlFunc)
  }
}


const addEffectControlHandler = (control) => {

  curEventType = control

  switch (control) {

    case 'slider':
      const min = selectedEffect.minValue !== undefined ? selectedEffect.minValue : -10
      effectControlBlock.innerHTML = `
        <div class="effect-control__slider-container">
          <input type="range" min="${min}" max="10" value="0" class="effect-control__slider">
        </div>`
      controlBlock = document.querySelector('.effect-control__slider')
      const value = (0 - min) / (10 - min) * 100
      controlBlock.style.background = 'linear-gradient(to right, #4794FE 0%, #4794FE ' + value + '%, #EEF2F7 ' + value + '%, #EEF2F7 100%)'
      controlFunc = async (e) => {
        const value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        document.querySelector('.effect-control__slider').style.background = 'linear-gradient(to right, #4794FE 0%, #4794FE ' + value + '%, #EEF2F7 ' + value + '%, #EEF2F7 100%)'
        await setEffectParam(selectedEffect.params, e.target.value * selectedEffect.direction / 10, selectedEffect?.arg)
      }
      controlBlock.addEventListener('input', controlFunc)
      break

    case 'toggle':
      effectControlBlock.innerHTML = '<input type="checkbox" name="toggle" class="effect-control__toggle" checked>'
      controlBlock = document.querySelector('.effect-control__toggle')
      controlFunc = async (e) => {
        await setEffectParam(selectedEffect.params, e.target.checked ? 1 : 0)
      }
      controlBlock.addEventListener('change', controlFunc)
      break

    case 'analise':
      if (selectedEffect.name === 'Detection_gestures.zip') {
        handGesturesTipBlock.classList.remove('hidden')
        controlBlock = handGesturesBlock
      } else if (selectedEffect.name === 'heart_rate.zip') {
        heartRateBlock.classList.remove('hidden')
        controlBlock = heartRateBlock
      } else if (selectedEffect.name === 'test_Ruler.zip') {
        testRulerBlock.classList.remove('hidden')
        controlBlock = testRulerBlock
      }
      controlFunc = startAnalysis(selectedEffect.name, selectedEffect.params[0], controlBlock)
      break

    case 'game':
      controlFunc = startGame
      controlBlock = document.querySelector('#webar')
      controlBlock.addEventListener('click', controlFunc)
      break

    default:
      controlBlock = null
      controlFunc = null
      curEventType = null
  }

}


const startEffect = (effectIndex) => {
  selectedEffect = selectedCategory.effects[effectIndex]
  const effectPath = selectedTechnology.label === 'Imported' ? 'import/' : 'assets/effects/'
  applyEffect(effectPath + selectedEffect.name)
    .then(() => addEffectControlHandler(selectedEffect?.control))

}


const createEffectBlock = async (effects) => {
  let htmlBlock = ''
  const onEffectSelect = async (e) => {
    removeEffectControlHandler()
    await clearEffect()
    startEffect(e?.target.value ?? 0)
  }

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
        </div>`
    }

    effectsBlock.innerHTML = htmlBlock
    effectsBlock.style.marginLeft = selectedCategoryInput.value === 'facemorphing' ? '-60px' : null

    document.querySelectorAll('input[name="effect"]').forEach((el, i) => {
      el.addEventListener('click', onEffectSelect)
      if (i === 0) el.click();
    })
  } else {
    effectsBlock.innerHTML = htmlBlock
    await onEffectSelect()
  }
}


const createCategoryBlock = (categories) => {
  let htmlBlock = ''

  for (let category in categories) {
    htmlBlock += `
      <div class="category ${categories[category].label === '' ? 'hidden' : ''}">
        <input type="radio" name="category" id="${category}" value="${category}">
        <label for="${category}">${categories[category].label}</label>
      </div>`
  }

  categoriesBlock.innerHTML = htmlBlock
  categoriesBlock.style.transform = ''

  let children = categoriesBlock.children;
  let totalWidth = 0;

  for (let i = 0; i < children.length; i++) {
    totalWidth += parseInt(children[i].offsetWidth, 10);
  }

  if (totalWidth > 1088) {
    categoriesBlock.classList.add('categories-long')
    categoriesButtonRight.classList.remove('hidden')
  } else {
    categoriesBlock.classList.remove('categories-long')
    categoriesButtonLeft.classList.add('hidden')
    categoriesButtonRight.classList.add('hidden')
  }


  const onCategorySelect = async (e) => {
    if (e.target === selectedCategoryInput) {
      return
    }
    selectedCategoryInput = e.target
    selectedCategory = selectedTechnology.categories[selectedCategoryInput.value]
    await createEffectBlock(selectedCategory.effects)
  }

  document.querySelectorAll('input[name="category"]').forEach((el, i) => {
    el.addEventListener('click', onCategorySelect)
    if (i === 0) el.click();
  })
};


const createTechBlock = () => {

  for (let tech in effectsList) {
    techBlock.innerHTML += `
      <div class="technology">
          <input type="radio" name="tech" id="${tech}" value="${tech}">
          <label for="${tech}">${effectsList[tech].label}</label>
      </div>`
  }

  const onTechSelect = async (e) => {

    if (e.target === selectedTechInput) {
      return
    }

    importMessageBlock.classList.add('hidden')
    selectedTechInput = e.target
    if (selectedTechInput.value === 'import') {
      selectedTechnology = {label: 'Imported', categories: {}}
      effectsList[selectedTechInput.value].effects.forEach(effect => {
        selectedTechnology.categories[effect.name] = {
          label: effect.name,
          effects: [effect]
        }
      })
      if (!effectsList[selectedTechInput.value].effects.length) {
        importMessageBlock.classList.remove('hidden')
        removeEffectControlHandler()
        await clearEffect()
        effectsBlock.innerHTML = ''
      }
    } else {
      selectedTechnology = effectsList[selectedTechInput.value]
    }

    createCategoryBlock(selectedTechnology.categories)

    if (resetButton.disabled) {
      resetButton.disabled = false
    }

  }

  document.querySelectorAll('input[name="tech"]').forEach(el => {
    el.addEventListener('click', onTechSelect)
  })
}

const getImportedEffects = () => {
  importedEffectsList.forEach(effect => effectsList.import.effects.push({name: effect}))
}


const onResetButtonClick = async () => {
  stopAnalysis()
  await clearEffect()
  selectedCategoryInput = null
  selectedTechnology = null
  selectedTechInput.checked = false
  selectedTechInput = null
  selectedCategory = null
  selectedEffect = null
  handGesturesBlock.classList.add('hidden')
  importMessageBlock.classList.add('hidden')
  heartRateBlock.classList.add('hidden')
  testRulerBlock.classList.add('hidden')
  effectsBlock.innerHTML = ''
  categoriesBlock.innerHTML = ''
  resetButton.disabled = !resetButton.disabled
};

const onMuteButtonClick = () => {
  muteButton.src = !!isSoundOn ?
    'assets/icons/controls/icon-sound.svg' :
    'assets/icons/controls/icon-sound-active.svg'
  isSoundOn = 1 - isSoundOn
  muteToggle(isSoundOn)
};


const onScreenshotButtonClick = async (e) => {
  if (e.type === 'mousedown') {
    screenshotButton.src = 'assets/icons/controls/icon-screenshot-active.svg'
  } else {
    screenshotButton.src = 'assets/icons/controls/icon-screenshot.svg'
    const url = URL.createObjectURL(await getScreenshot())
    const popup = document.createElement('div')
    popup.classList.add('popup', 'popup__hidden')
    popup.innerHTML = `<span class="popup__bold">Screenshot is ready</span> Check the <span id="screenshot-link"><a href="${url}" target="_blank">link</a></span>`
    popups.prepend(popup)
    setTimeout(() => {
      popup.classList.remove('popup__hidden')
    }, 20)
    setTimeout(() => {
      popup.classList.add('popup__hidden')
      setTimeout(() => {
        popup.remove()
      }, 5500)
    }, 5000)
  }
};


let recDurationInterval
let recDuration


const renderRecDuration = () => {

  const str_pad_left = (string) => {
    return (new Array(3).join('0') + string).slice(-2);
  }

  const minutes = Math.floor(recDuration / 60);
  const seconds = recDuration - minutes * 60;
  recDurationBlock.innerText = str_pad_left(minutes) + ':' + str_pad_left(seconds);
  recDuration += 1
}


const onRecButtonClick = async () => {
  if (!!isRecording) {
    recButton.src = 'assets/icons/controls/icon-record.svg'
    recDurationBlock.classList.add('hidden')
    clearInterval(recDurationInterval)
    const url = URL.createObjectURL(await stopRecord())
    const popup = document.createElement('div')
    popup.classList.add('popup', 'popup__hidden')
    popup.innerHTML = `<span class="popup__bold">Video is ready</span> Check the <span id="rec-link"><a href="${url}" target="_blank">link</a</span>`
    popups.prepend(popup)
    setTimeout(() => {
      popup.classList.remove('popup__hidden')
    }, 20)
    setTimeout(() => {
      popup.classList.add('popup__hidden')
      setTimeout(() => {
        popup.remove()
      }, 5500)
    }, 5000)
  } else {
    recButton.src = 'assets/icons/controls/icon-record-active.svg'
    recDurationBlock.classList.remove('hidden')
    recDurationBlock.innerText = '00:00'
    startRecord()
    recDuration = 0
    renderRecDuration()
    recDurationInterval = setInterval(renderRecDuration, 1000)
  }
  isRecording = 1 - isRecording
};


const onSourceSelect = () => {

  startScreen.classList.add('hidden')
  overlay.classList.add('hidden')
  setInterval(() => {
    fpsBlock.querySelectorAll('span').forEach(el => {
      el.innerText = fps[el.id].toFixed(1)
    })
  })
}


const onWebcamSelect = (e) => {
  const source = getSource(e.target.value)
  startPlayer(source)
  onSourceSelect()
};


const onImageSelect = (e) => {
  const source = getSource(e.target.value, e.target.files[0])
  startPlayer(source)
  onSourceSelect()
};


spinner.classList.add('hidden')
startScreen.querySelector('.start-screen__inner').classList.remove('hidden')
resetButton.addEventListener('click', onResetButtonClick)
muteButton.addEventListener('click', onMuteButtonClick)
screenshotButton.addEventListener('mousedown', onScreenshotButtonClick)
screenshotButton.addEventListener('mouseup', onScreenshotButtonClick)
recButton.addEventListener('click', onRecButtonClick)
webcamSourceButton.addEventListener('click', onWebcamSelect)
imageSourceButton.addEventListener('change', onImageSelect)
categoriesButtonLeft.querySelector('.categories-button__left-icon').addEventListener('click', () => {
  categoriesButtonLeft.classList.add('hidden')
  categoriesButtonRight.classList.remove('hidden')
  categoriesBlock.style.transform = 'translateX(0px)'
})
categoriesButtonRight.querySelector('.categories-button__right-icon').addEventListener('click', () => {
  categoriesButtonLeft.classList.remove('hidden')
  categoriesButtonRight.classList.add('hidden')
  categoriesBlock.style.transform = 'translateX(-400px)'
})
document.querySelector('.hand-gestures-tip__button').addEventListener('click', () => {
  handGesturesTipBlock.classList.add('hidden')
  handGesturesBlock.classList.remove('hidden')
  handGesturesBlock.classList.remove('hidden')
})
getImportedEffects()
createTechBlock()
