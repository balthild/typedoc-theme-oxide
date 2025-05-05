const path = require('path');
const fs = require('fs').promises;
const { fetch } = require('undici');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

const urlPrefix = 'https://cdn.jsdelivr.net/gh/rust-lang/rust@1.86.0/src/librustdoc/html/static';
const destPrefix = path.join(__dirname, '..', 'dist', 'assets', 'rustdoc');

main();

async function main() {
  await fs.rm(destPrefix, { recursive: true, force: true });
  await fs.mkdir(destPrefix, { recursive: true });

  await downloadStyle();
  await downloadMainJs();
  await downloadSettingsJs();
}

async function downloadStyle() {
  console.log('Downloading and processing rustdoc.css');

  const src = `${urlPrefix}/css/rustdoc.css`;
  const dest = path.join(destPrefix, 'rustdoc.css');

  const response = await fetch(src);
  let source = await response.text();

  // The hash has a fixed length of 8
  // https://github.com/rust-lang/rust/blob/1.86.0/src/librustdoc/build.rs#L49
  source = source.replace(
    /url\("([\w\d\.-]+)(-[0-9a-f]{8})(\.woff2|\.ttf\.woff2)"\)/g,
    (match, name, hash, ext) => `url("${urlPrefix}/fonts/${name}${ext}")`,
  );

  source = [
    `/**`,
    ` * Minified with clean-css. Relative urls are replaced with absolute urls of jsDelivr.`,
    ` * Original file: ${src}`,
    ` */`,
    new CleanCSS().minify(source).styles,
  ].join('\n');

  await fs.writeFile(dest, source);
}

async function downloadMainJs() {
  console.log('Downloading and processing main.js');

  const src = `${urlPrefix}/js/main.js`;
  const dest = path.join(destPrefix, 'main.js');

  const response = await fetch(src);
  let source = await response.text();

  source = source.replace(
    'function sendSearchForm() {',
    'function sendSearchForm() { return;',
  );

  source = [
    `/**`,
    ` * Minified with terser.`,
    ` * Original file: ${src}`,
    ` */`,
    (await minify(source)).code,
  ].join('\n');

  await fs.writeFile(dest, source);
}

async function downloadSettingsJs() {
  console.log('Downloading and processing settings.js');

  const src = `${urlPrefix}/js/settings.js`;
  const dest = path.join(destPrefix, 'settings.js');

  const response = await fetch(src);
  let source = await response.text();

  source = [
    `/**`,
    ` * Minified with terser.`,
    ` * Original file: ${src}`,
    ` */`,
    (await minify(source)).code,
  ].join('\n');

  await fs.writeFile(dest, source);
}
