from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

source = Path(__file__).resolve().parent
for name in ("Morphing", "SkinSmoothing", "EyeColorBlue", "EyeColorGreen"):
    target = source.parent / "assets" / "effects" / f"{name}.zip"
    with ZipFile(target, "w") as archive:
        for filename in ("config.json", "config.js"):
            info = ZipInfo(filename, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = ZIP_DEFLATED
            archive.writestr(info, (source / name / filename).read_bytes())
