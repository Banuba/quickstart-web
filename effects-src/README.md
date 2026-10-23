# Prefab effects

These sources replace the legacy Makeup-derived effects. `Morphing` retains all
face, nose, eye, eyebrow and lip sliders; `SkinSmoothing` controls face smoothing;
`EyeColorBlue` and `EyeColorGreen` provide the two eye-color presets.

The effect configurations use SDK prefabs supplied by the loaded modules.
The Web sample loads the `makeup` module for `makeup_base` smoothing.

Rebuild the four archives after changing their sources:

```sh
python3 effects-src/build.py
```
