// Generates WebP variants, favicon/app icons and the social-preview image
// from the source PNGs in public/images. Run: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const src = "assets/source-images";
const out = "public/images";
const photos = [
  "hero-image",
  "section2-the-solution",
  "services-section",
  "pillarcard2-intelligent-dispatch"
];
const widths = [640, 1024, 1600];

for (const name of photos) {
  const meta = await sharp(`${src}/${name}.png`).metadata();
  for (const w of widths) {
    if (w > meta.width) continue;
    await sharp(`${src}/${name}.png`)
      .resize({ width: w })
      .webp({ quality: 78 })
      .toFile(`${out}/${name}-${w}.webp`);
  }
}

await sharp(`${src}/op-genesis-wordmark.png`).resize({ width: 400 }).webp({ quality: 90 }).toFile(`${out}/op-genesis-wordmark.webp`);
await sharp(`${src}/op-genesis-emblem.png`).resize({ width: 640 }).webp({ quality: 90 }).toFile(`${out}/op-genesis-emblem.webp`);

// Icons (Next.js picks up app/icon.png and app/apple-icon.png automatically)
const square = (size) =>
  sharp(`${src}/op-genesis-emblem.png`)
    .resize({ width: size, height: size, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png();
await square(512).toFile("app/icon.png");
await sharp(`${src}/op-genesis-emblem.png`)
  .resize({ width: 150, height: 150, fit: "contain", background: "#ffffff" })
  .extend({ top: 15, bottom: 15, left: 15, right: 15, background: "#ffffff" })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("app/apple-icon.png");

// Social preview 1200x630: hero photo with navy band + wordmark
await mkdir("app", { recursive: true });
const wordmark = await sharp(`${src}/op-genesis-wordmark.png`).resize({ width: 420 }).png().toBuffer();
const wmMeta = await sharp(wordmark).metadata();
const plate = await sharp({
  create: { width: 480, height: wmMeta.height + 40, channels: 4, background: "#ffffff" }
})
  .composite([{ input: wordmark, top: 20, left: 30 }])
  .png()
  .toBuffer();
await sharp(`${src}/hero-image.png`)
  .resize({ width: 1200, height: 630, fit: "cover" })
  .composite([{ input: plate, top: 630 - (wmMeta.height + 40) - 40, left: 40 }])
  .jpeg({ quality: 82 })
  .toFile("app/opengraph-image.jpg");

console.log("done");
