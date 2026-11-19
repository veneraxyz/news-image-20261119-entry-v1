// news-image-20261119 v1: copies the pre-rendered daily-briefing image to
// /output/entry.png. The image (a 1024x1024 PNG drawn offline) is held in
// this repository as entry.png; this program is stdlib-only and deterministic.
import { dirname, join } from "node:path";
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const imageName = "entry.png";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, imageName), join(outDir, imageName));
