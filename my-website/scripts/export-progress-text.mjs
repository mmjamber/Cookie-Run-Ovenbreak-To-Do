import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const font = await readFile(new URL("../public/fonts/CookieRun-Black.otf", import.meta.url));
const fontBase64 = font.toString("base64");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1100" height="260" viewBox="0 0 1100 260">
  <defs>
    <style>
      @font-face {
        font-family: "CookieRunExport";
        src: url("data:font/opentype;base64,${fontBase64}") format("opentype");
        font-weight: 900;
      }
      .progress-text {
        font-family: "CookieRunExport", sans-serif;
        font-size: 86px;
        font-weight: 900;
        letter-spacing: 0;
        fill: #ffffff;
        stroke: #351d12;
        stroke-width: 8px;
        stroke-linejoin: round;
        paint-order: stroke fill;
      }
    </style>
    <path id="downward-curve" d="M 80 92 Q 550 190 1020 92" />
  </defs>

  <text class="progress-text">
    <textPath xlink:href="#downward-curve" startOffset="50%" text-anchor="middle">Track your progress!</textPath>
  </text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(fileURLToPath(new URL("../public/images/progress-text.png", import.meta.url)));

await writeFile(new URL("../public/images/progress-text.svg", import.meta.url), svg);
