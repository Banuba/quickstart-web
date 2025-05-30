let SDK_VERSION = "1.17.0";

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("sdk")) {
  SDK_VERSION = urlParams.get("sdk");
}

const {
  Dom,
  Effect,
  Image,
  ImageCapture,
  Module,
  Player,
  VideoRecorder,
  Webcam,
  VERSION,
} = await import(
  `https://cdn.jsdelivr.net/npm/@banuba/webar@${SDK_VERSION}/dist/BanubaSDK.browser.esm.min.js`
);

if (VERSION != SDK_VERSION) {
  console.warn(
    `Version dont match: requested ${SDK_VERSION} - received ${VERSION}`
  );

  SDK_VERSION = VERSION;

  if (SDK_VERSION.includes("-")) {
    console.warn("SDK version includes '-'. Removing it...");
    SDK_VERSION = SDK_VERSION.slice(0, SDK_VERSION.indexOf("-"));
  }
}

const sdkUrl = "https://cdn.jsdelivr.net/npm/@banuba/webar";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const modulesList = [
  "background",
  "body",
  "eyes",
  "face_tracker",
  "hair",
  "hands",
  "lips",
  "skin",
];

export const fps = {
  cam: 0,
  processing: 0,
  render: 0,
};

const fpsCounter = {
  cam: 0,
  processing: 0,
  render: 0,
};

let currentEffect;

console.log("Load player with SDK: ", SDK_VERSION);

// Fixes video range requests in Safari that cause AR effects animation delay
// https://docs.banuba.com/far-sdk/tutorials/development/known_issues/web/#effect-animations-are-delayed-in-safari
navigator.serviceWorker.register("./range-requests.sw.js")

const player = await Player.create({
  clientToken: window.BANUBA_CLIENT_TOKEN,
  proxyVideoRequestsTo: isSafari ? "___range-requests___/" : null,
  useFutureInterpolate: false,
  locateFile: `${sdkUrl}@${SDK_VERSION}/dist`,
});

await Promise.all(
  modulesList.map((moduleId) => {
    return new Promise(async (resolve) => {
      try {
        const module = await Module.preload(
          `https://cdn.jsdelivr.net/npm/@banuba/webar@${SDK_VERSION}/dist/modules/${moduleId}.zip`
        );
        await player.addModule(module);
      } catch (error) {
        console.warn(`Load module ${moduleId} error: `, error);
      }

      return resolve();
    });
  })
);

const startFpsTracking = () => {
  player.addEventListener("framereceived", () => fpsCounter.cam++);
  player.addEventListener(
    "frameprocessed",
    ({ detail }) => (fpsCounter.processing = 1000 / detail.averagedDuration)
  );
  player.addEventListener("framerendered", () => fpsCounter.render++);

  setInterval(() => {
    fps.cam = fpsCounter.cam;
    fps.render = fpsCounter.render;
    fps.processing = fpsCounter.processing;
    fpsCounter.cam = 0;
    fpsCounter.render = 0;
  }, 1000);
};

let curResult;
let analyseFunc;
const renderAnalysisResultFuncs = {
  Detection_gestures: async (paramString, resultBlock) => {
    const res = await currentEffect.evalJs(paramString);

    if (!(curResult !== res && res !== undefined)) {
      return false;
    }

    curResult = res;

    const icon =
      res === "No Gesture"
        ? ""
        : `<img src="assets/icons/hand_gestures/${curResult}.svg" alt="${curResult}"/>`;

    resultBlock.innerHTML = `${icon}<span>${curResult}</span>`;
  },

  heart_rate: async (paramString, resultBlock) => {
    const res = await currentEffect.evalJs(paramString);
    if (!(curResult !== res && res !== undefined)) {
      return false;
    }

    curResult = res;

    if (curResult.includes("calculation")) {
      resultBlock.classList.add("heart-rate__analyse");
    } else {
      resultBlock.classList.remove("heart-rate__analyse");
    }

    resultBlock.innerText = curResult;

    return true;
  },

  test_Ruler: async (paramString, resultBlock) => {
    const res = await currentEffect.evalJs(paramString);
    if (curResult !== res && res !== undefined) {
      curResult = res;
      resultBlock.innerText = curResult;
    }
  },
};

/**
 * __analyticsState can be "enabled" or "disabled"
 */
const __analyticsActive = "active";
const __analyticsInActive = "inactive";
let _analyticsState = __analyticsInActive;

export const startAnalysis = async (effectName, paramString, resultBlock) => {
  analyseFunc = () =>
    renderAnalysisResultFuncs[effectName.split(".")[0]](
      paramString,
      resultBlock
    );
  player.addEventListener("framedata", analyseFunc);
  _analyticsState = __analyticsActive;
};

export const stopAnalysis = () => {
  if (_analyticsState === __analyticsActive)
    player.removeEventListener("framedata", analyseFunc);
  _analyticsState = __analyticsInActive;
};

export const clearEffect = async () => {
  await player.clearEffect();
};

export const muteToggle = (value) => {
  player.setVolume(value);
};

export const getSource = (sourceType, file) => {
  return sourceType === "webcam" ? new Webcam() : new Image(file);
};

export const getPlayer = () => {
  return player;
};

export const startPlayer = (source) => {
  player.use(source);
  Dom.render(player, "#webar");
  startFpsTracking();
};

export const applyEffect = async (effectName) => {
  currentEffect = new Effect(effectName);
  await player.applyEffect(currentEffect);
};

export const applyEffectParam = async (paramString) => {
  await currentEffect.evalJs(paramString);
};

export const startGame = () => {
  currentEffect.evalJs("isButtonTouched").then((isButtonTouched) => {
    if (isButtonTouched === "false") {
      currentEffect.evalJs("onClick()");
    }
  });
};

export const getScreenshot = async () => {
  const capture = new ImageCapture(player);
  return await capture.takePhoto();
};

let recorder;
const getRecorder = () => {
  if (recorder) return recorder;

  recorder = new VideoRecorder(player);
  return recorder;
};

export const startRecord = () => {
  getRecorder().start();
};

export const stopRecord = async () => {
  return await getRecorder().stop();
};
