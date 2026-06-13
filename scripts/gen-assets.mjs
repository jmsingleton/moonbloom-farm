import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const fonts = {
  loadSystemFonts: false,
  fontFiles: [
    'src/assets/fonts/Archivo-ExpandedBlack.ttf',
    'src/assets/fonts/Archivo-Bold.ttf',
  ],
  defaultFontFamily: 'Archivo',
};

async function renderPng(svgPath, outPath, width) {
  const svg = await readFile(svgPath, 'utf8');
  const resvg = new Resvg(svg, { font: fonts, fitTo: { mode: 'width', value: width } });
  const png = resvg.render().asPng();
  await writeFile(outPath, png);
  console.log(`wrote ${outPath} (${png.length} bytes)`);
  return png;
}

await mkdir('public/og', { recursive: true });

// OG card: 1200×630
await renderPng('src/assets/og-card.svg', 'public/og/og-card.png', 1200);

// Print-ready stamp: badge at 1.5in @ 600dpi = 900px
await renderPng('public/logos/moonbloom-badge.svg', 'public/logos/moonbloom-stamp-print.png', 900);

// Favicon: 16/32/48 from favicon.svg → ico
const sizes = [16, 32, 48];
const pngs = [];
for (const s of sizes) {
  const svg = await readFile('public/favicon.svg', 'utf8');
  const resvg = new Resvg(svg, { font: fonts, fitTo: { mode: 'width', value: s } });
  pngs.push(Buffer.from(resvg.render().asPng()));
}
await writeFile('public/favicon.ico', await pngToIco(pngs));
console.log('wrote public/favicon.ico');
