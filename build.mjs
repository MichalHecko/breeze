// Breeze build: Sass → PostCSS (--bs- prefix) → dist/breeze.css and breeze.min.css
// Usage: node build.mjs          (single build)
//        node build.mjs --watch  (rebuild on every change in scss/)
import { watch } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import * as sass from 'sass';
import postcss from 'postcss';
import prefixCustomProperties from 'postcss-prefix-custom-properties';

const ENTRY = 'scss/breeze.scss';
const OUT = 'dist/breeze';

// Bootstrap 6 writes CSS variables without a prefix; its JavaScript expects --bs-.
const prefixer = postcss([prefixCustomProperties({ prefix: 'bs-' })]);

async function build() {
  const started = Date.now();
  await mkdir('dist', { recursive: true });
  for (const style of ['expanded', 'compressed']) {
    const { css } = sass.compile(ENTRY, { style, loadPaths: ['node_modules'], quietDeps: true });
    const result = await prefixer.process(css, { from: undefined });
    await writeFile(`${OUT}${style === 'compressed' ? '.min' : ''}.css`, result.css);
  }
  console.log(`Breeze: dist/breeze.css and dist/breeze.min.css (${Date.now() - started} ms)`);
}

async function safeBuild() {
  try {
    await build();
  } catch (error) {
    console.error(error.message);
    if (!process.argv.includes('--watch')) process.exitCode = 1;
  }
}

await safeBuild();

if (process.argv.includes('--watch')) {
  let timer;
  watch('scss', { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(safeBuild, 100);
  });
  console.log('Watching scss/ …');
}
