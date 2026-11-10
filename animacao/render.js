// Exporta a animação para MP4 (1280x720, 30 fps), quadro a quadro.
// Uso: node render.js [pasta-de-quadros] [saida.mp4]
// Requer: Playwright (Chromium) e ffmpeg instalados.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const FPS = 30;
const framesDir = path.resolve(process.argv[2] || 'frames');
const out = path.resolve(process.argv[3] || 'video/tres-amigas-ep1.mp4');

(async () => {
  fs.mkdirSync(framesDir, { recursive: true });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto('file://' + path.join(__dirname, 'index.html') + '?render');
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.TOTAL);
  const n = Math.round(total * FPS);
  for (let i = 0; i <= n; i++) {
    await page.evaluate(t => window.seek(t), i / FPS);
    await page.screenshot({ path: path.join(framesDir, `f${String(i).padStart(5, '0')}.png`) });
    if (i % 150 === 0) console.log(`quadro ${i}/${n}`);
  }
  await browser.close();
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS),
    '-i', path.join(framesDir, 'f%05d.png'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
    '-crf', '18', '-movflags', '+faststart', out], { stdio: 'inherit' });
  console.log('Vídeo salvo em', out);
})();
