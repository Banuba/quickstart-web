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
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "narrowing",
            direction: 1,
            icon: "face_narrowing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "v_shape",
            direction: 1,
            icon: "face_v_shape.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "cheekbones_narrowing",
            direction: 1,
            icon: "face_cheekbones_narrowing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "cheeks_narrowing",
            direction: 1,
            icon: "face_cheeks_narrowing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "jaw_narrowing",
            direction: 1,
            icon: "face_jaw_narrowing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "chin_shortening",
            direction: 1,
            icon: "face_chin_shortening.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "chin_narrowing",
            direction: 1,
            icon: "face_chin_narrowing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
            arg: "sunken_cheeks",
            minValue: "0",
            direction: 1,
            icon: "face_sunken_cheeks.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.face"],
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
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.nose"],
            arg: "width",
            direction: 1,
            icon: "nose_width.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.nose"],
            arg: "length",
            direction: 1,
            icon: "nose_length.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.nose"],
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
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "rounding",
            minValue: "0",
            direction: 1,
            icon: "eyes_rounding.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "enlargement",
            direction: 1,
            icon: "eyes_enlargement.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "height",
            direction: 1,
            icon: "eyes_height.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "spacing",
            direction: 1,
            icon: "eyes_spacing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "squint",
            direction: -1,
            icon: "eyes_squint.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
            arg: "lower_eyelid_pos",
            direction: 1,
            icon: "eyes_lower_eyelid_pos.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyes"],
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
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyebrows"],
            arg: "spacing",
            direction: -1,
            icon: "eyebrows_spacing.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyebrows"],
            arg: "height",
            direction: -1,
            icon: "eyebrows_height.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.eyebrows"],
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
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
            direction: 1,
            arg: "size",
            icon: "lips_size.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
            direction: 1,
            arg: "height",
            icon: "lips_height.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
            direction: 1,
            arg: "thickness",
            icon: "lips_thickness.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
            direction: -1,
            arg: "mouth_size",
            icon: "lips_mouth_size.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
            direction: 1,
            minValue: "0",
            arg: "smile",
            icon: "lips_smile.svg",
          },
          {
            name: "Morphings_1.7.0.zip",
            control: "slider",
            params: ["FaceMorph.lips"],
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
            name: "SkinSoftening.zip",
            control: "slider",
            params: ["Skin.softening"],
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
          { name: "Eye_lenses_Blue.zip", icon: "Eye_lenses_Blue.png" },
          { name: "Eye_lenses_Green.zip", icon: "Eye_lenses_Green.png" },
          { name: "glasses_RayBan4165_Dark.zip", icon: "Glasses_Dark.png" },
        ],
      },
      hair: {
        label: "Hair Coloring",
        effects: [
          { name: "VTO_Hair_blue.zip", icon: "VTO_Hair_blue.png" },
          { name: "VTO_Hair_green.zip", icon: "VTO_Hair_green.png" },
          { name: "VTO_Hair_strand.zip", icon: "VTO_Hair_strand.png" },
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
