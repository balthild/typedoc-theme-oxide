const path = require('path');
const fs = require('fs').promises;
const { fetch } = require('undici');
const CleanCSS = require('clean-css');

const urlPrefix = 'https://cdn.jsdelivr.net/gh/rust-lang/rust@1.61.0/src/librustdoc/html/static';
const destPrefix = path.join(__dirname, '..', 'assets', 'rustdoc');

async function main() {
  await fs.rm(destPrefix, { recursive: true, force: true });
  await fs.mkdir(destPrefix, { recursive: true });

  console.log('Downloading and preprocessing rustdoc.css');

  const src = `${urlPrefix}/css/rustdoc.min.css`;
  const dest = path.join(destPrefix, 'rustdoc.patched.min.css');

  const response = await fetch(src);

  let css = await response.text();

  css = css.replace(/url\("([\w\d\.-]+\.woff2?)"\)/g, `url("${urlPrefix}/fonts/$1")`);
  css = css.replace(/url\("([\w\d\.-]+\.svg)"\)/g, `url("${urlPrefix}/images/$1")`);
  css = new CleanCSS().minify(css).styles;
  css = `\
/**
 * Minified using clean-css. Relative urls are replaced with absolute urls.
 * Original file: ${src}
 */
${css}
`;

  await fs.writeFile(dest, css);
}

main();
