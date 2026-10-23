export const effectsList = {
  ar_games: {
    label: "AR Games",
    categories: {
      flappy_plane: {
        label: "Flappy Plane",
        effects: [{ name: "FlappyPlane_mouth.zip" }],
      },
      what_animal_are_you: {
        label: "What Animal Are You",
        effects: [{ name: "What_Animal_Are_You.zip", control: "game" }],
      },
    },
  },

  ar_videocall: {
    label: "AR VideoCall",
    categories: {
      background_separation: {
        label: "Background separation",
        effects: [
          { name: "Regular_blur.zip", icon: "Regular_blur.png" },
          { name: "video_BG_RainyCafe.zip", icon: "video_BG_RainyCafe.png" },
        ],
      },
      beauty_filter: {
        label: "Beauty Filter",
        effects: [
          { name: "dialect.zip", icon: "dialect.png" },
          { name: "WhooshBeautyFemale.zip", icon: "WhooshBeautyFemale.png" },
        ],
      },
      lightning_color_correction: {
        label: "Lightning and Color correction",
        effects: [{ name: "Sunset.zip" }],
      },
    },
  },

  avatar: {
    label: "Avatar",
    categories: {
      hades: {
        label: "Hades",
        effects: [{ name: "Hades.zip" }],
      },
    },
  },

  beauty_touch_up: {
    label: "Beauty Touch UP",
    categories: {
      facemorphing: {
        label: "Face morphing",
        effects: [
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "narrowing",
            direction: 1,
            icon: "face_narrowing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "v_shape",
            direction: 1,
            icon: "face_v_shape.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "cheekbones_narrowing",
            direction: 1,
            icon: "face_cheekbones_narrowing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "cheeks_narrowing",
            direction: 1,
            icon: "face_cheeks_narrowing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "jaw_narrowing",
            direction: 1,
            icon: "face_jaw_narrowing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "chin_shortening",
            direction: 1,
            icon: "face_chin_shortening.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "chin_narrowing",
            direction: 1,
            icon: "face_chin_narrowing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "sunken_cheeks",
            minValue: "0",
            direction: 1,
            icon: "face_sunken_cheeks.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.face"],
            arg: "cheeks_jaw_narrowing",
            direction: 1,
            icon: "face_cheeks_jaw_narrowing.svg",
          },
        ],
      },
      nose: {
        label: "Nose",
        effects: [
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.nose"],
            arg: "width",
            direction: 1,
            icon: "nose_width.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.nose"],
            arg: "length",
            direction: 1,
            icon: "nose_length.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.nose"],
            arg: "tip_width",
            direction: -1,
            icon: "nose_tip_width.svg",
          },
        ],
      },
      eyes: {
        label: "Eyes",
        effects: [
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "rounding",
            minValue: "0",
            direction: 1,
            icon: "eyes_rounding.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "enlargement",
            direction: 1,
            icon: "eyes_enlargement.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "height",
            direction: 1,
            icon: "eyes_height.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "spacing",
            direction: 1,
            icon: "eyes_spacing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "squint",
            direction: -1,
            icon: "eyes_squint.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "lower_eyelid_pos",
            direction: 1,
            icon: "eyes_lower_eyelid_pos.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyes"],
            arg: "lower_eyelid_size",
            direction: -1,
            icon: "eyes_lower_eyelid_size.svg",
          },
        ],
      },
      eyebrows: {
        label: "Eyebrows",
        effects: [
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyebrows"],
            arg: "spacing",
            direction: -1,
            icon: "eyebrows_spacing.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyebrows"],
            arg: "height",
            direction: -1,
            icon: "eyebrows_height.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.eyebrows"],
            arg: "bend",
            direction: 1,
            icon: "eyebrows_bend.svg",
          },
        ],
      },
      lips: {
        label: "Lips",
        effects: [
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: 1,
            arg: "size",
            icon: "lips_size.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: 1,
            arg: "height",
            icon: "lips_height.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: 1,
            arg: "thickness",
            icon: "lips_thickness.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: -1,
            arg: "mouth_size",
            icon: "lips_mouth_size.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: 1,
            minValue: "0",
            arg: "smile",
            icon: "lips_smile.svg",
          },
          {
            name: "Morphing.zip",
            control: "slider",
            params: ["bnb_morphing0.lips"],
            direction: -1,
            arg: "shape",
            icon: "lips_shape.svg",
          },
        ],
      },
      skin: {
        label: "Skin",
        effects: [
          {
            name: "SkinSmoothing.zip",
            control: "slider",
            params: ["setSmoothing"],
            minValue: 0,
            direction: 1,
          },
        ],
      },
      eye_whitening: {
        label: "Eye Whitening",
        effects: [
          {
            name: "EyesWitening_Toggle.zip",
            control: "toggle",
            params: ["onDataUpdate"],
          },
        ],
      },
      tooth_whitening: {
        label: "Tooth Whitening",
        effects: [
          {
            name: "TeethWitening_Toggle.zip",
            control: "toggle",
            params: ["onDataUpdate"],
          },
        ],
      },
    },
  },

  face_tracking: {
    label: "Face Tracking",
    categories: {
      background_foreground: {
        label: "Background/Foreground",
        effects: [
          { name: "BG.zip", icon: "BG.png" },
          { name: "FG.zip", icon: "FG.png" },
        ],
      },
      body_segmentation: {
        label: "Body segmentation",
        effects: [{ name: "Full_Body.zip" }],
      },
      distance_to_phone: {
        label: "Distance to camera",
        effects: [
          {
            name: "test_Ruler.zip",
            control: "analyze",
            params: ["onDataUpdate()"],
          },
        ],
      },
      eye_segmentation: {
        label: "Eye segmentation",
        effects: [{ name: "Eye_lenses.zip" }],
      },
      hair_segmentation: {
        label: "Hair segmentation",
        effects: [{ name: "Hair.zip" }],
      },
      landmarks: {
        label: "Landmarks",
        effects: [{ name: "DebugFRX.zip" }],
      },
      lips_segmentation: {
        label: "Lips segmentation",
        effects: [{ name: "Lips.zip" }],
      },
      skin_segmentation: {
        label: "Skin Segmentation",
        effects: [{ name: "Skin.zip" }],
      },
      analytics: {
        label: "Analytics",
        effects: [
          {
            name: "heart_rate.zip",
            control: "analyze",
            params: ["onDataUpdate()"],
          },
        ],
      },
    },
  },

  face_masks: {
    label: "Face Masks",
    categories: {
      animation: {
        label: "Animation",
        effects: [{ name: "Spider2.zip" }],
      },
      foreground_effects: {
        label: "Foreground effects",
        effects: [{ name: "Retrowave.zip" }],
      },
      masks_morphing: {
        label: "Masks with Morphing",
        effects: [{ name: "TrollGrandma.zip" }],
      },
      multiple_face_detection: {
        label: "Multiple Face Detection",
        effects: [{ name: "MinnieMouse7_multi.zip" }],
      },
      physics: {
        label: "Physics",
        effects: [{ name: "ConfusedRabbit.zip" }],
      },
      triggers: {
        label: "Triggers",
        effects: [
          {
            name: "Gangster.zip",
            control: "trigger",
            params: ["GetMouthStatus()"],
            tip: "Open your mouth",
            icon: "Gangster.svg",
          },
        ],
      },
    },
  },

  hand_tracking: {
    label: "Hand Tracking",
    categories: {
      gestures_detection: {
        label: "Gestures Detection",
        effects: [
          {
            name: "Detection_gestures.zip",
            control: "analyze",
            params: ["getGesture()"],
          },
        ],
      },
      rings_try_on: {
        label: "Rings try on",
        effects: [{ name: "Ring_01.zip" }],
      },
    },
  },

  virtual_try_on: {
    label: "Virtual Try On",
    categories: {
      glasses_try_on: {
        label: "Glasses Try On",
        effects: [
          { name: "EyeColorBlue.zip", icon: "Eye_lenses_Blue.png" },
          { name: "EyeColorGreen.zip", icon: "Eye_lenses_Green.png" },
          { name: "glasses_RayBan4165_Dark.zip", icon: "Glasses_Dark.png" },
        ],
      },
      hair: {
        label: "Hair Coloring",
        effects: [
          { name: "VTO_Hair_blue.zip", icon: "VTO_Hair_blue.png" },
          { name: "VTO_Hair_green.zip", icon: "VTO_Hair_green.png" },
          
          // Not a realtime:
          //{ name: "VTO_Hair_strand.zip", icon: "VTO_Hair_strand.png" },
        ],
      },
      head_wearings: {
        label: "Head wearings",
        effects: [{ name: "VTO_Headdresse_01.zip" }],
      },
      jewelry: {
        label: "Jewelry",
        effects: [
          { name: "earrings_01.zip", icon: "earrings_01.png" },
          { name: "necklace_01.zip", icon: "necklace_01.png" },
        ],
      },
      makeup: {
        label: "Makeup",
        effects: [{ name: "Low_look_clubs.zip" }],
      },
    },
  },

  import: {
    label: "Imported",
    effects: [],
  },
};
