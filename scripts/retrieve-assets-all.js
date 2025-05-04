const path = require('path');
const fs = require('fs').promises;
const { fetch } = require('undici');

const urlPrefix = 'https://cdn.jsdelivr.net/gh/rust-lang/rust@1.61.0/src/librustdoc/html/static';
const destPrefix = path.join(__dirname, '..', 'assets', 'rustdoc');

async function download(uri, dest) {
  dest = dest ?? uri.split('/').pop();
  console.log('Downloading %s', dest);

  const response = await fetch(`${urlPrefix}/${uri}`);
  const file = fs.createWriteStream(path.join(destPrefix, dest));
  await response.body.pipeTo(file);
}

async function main() {
  await fs.rm(assetsDir, { recursive: true, force: true });
  await fs.mkdir(assetsDir, { recursive: true });

  await download('css/normalize.min.css', 'normalize.css');
  await download('css/noscript.min.css', 'noscript.css');
  await download('css/rustdoc.min.css', 'rustdoc.css');
  await download('css/settings.min.css', 'settings.css');

  await download('css/themes/light.min.css', 'light.css');
  await download('css/themes/dark.min.css', 'dark.css');
  await download('css/themes/ayu.min.css', 'ayu.css');

  await download('fonts/FiraSans-LICENSE.txt');
  await download('fonts/FiraSans-Medium.woff');
  await download('fonts/FiraSans-Medium.woff2');
  await download('fonts/FiraSans-Regular.woff');
  await download('fonts/FiraSans-Regular.woff2');
  await download('fonts/NanumBarunGothic-LICENSE.txt');
  await download('fonts/NanumBarunGothic.ttf.woff');
  await download('fonts/NanumBarunGothic.ttf.woff2');
  await download('fonts/SourceCodePro-It.ttf.woff');
  await download('fonts/SourceCodePro-It.ttf.woff2');
  await download('fonts/SourceCodePro-LICENSE.txt');
  await download('fonts/SourceCodePro-Regular.ttf.woff');
  await download('fonts/SourceCodePro-Regular.ttf.woff2');
  await download('fonts/SourceCodePro-Semibold.ttf.woff');
  await download('fonts/SourceCodePro-Semibold.ttf.woff2');
  await download('fonts/SourceSerif4-Bold.ttf.woff');
  await download('fonts/SourceSerif4-Bold.ttf.woff2');
  await download('fonts/SourceSerif4-It.ttf.woff');
  await download('fonts/SourceSerif4-It.ttf.woff2');
  await download('fonts/SourceSerif4-LICENSE.md');
  await download('fonts/SourceSerif4-Regular.ttf.woff');
  await download('fonts/SourceSerif4-Regular.ttf.woff2');

  await download('images/brush.min.svg', 'brush.svg');
  await download('images/clipboard.min.svg', 'clipboard.svg');
  await download('images/down-arrow.min.svg', 'down-arrow.svg');
  await download('images/favicon-16x16.min.png', 'favicon-16x16.png');
  await download('images/favicon-32x32.min.png', 'favicon-32x32.png');
  await download('images/favicon.min.svg', 'favicon.svg');
  await download('images/rust-logo.min.svg', 'rust-logo.svg');
  await download('images/toggle-minus.min.svg', 'toggle-minus.svg');
  await download('images/toggle-plus.min.svg', 'toggle-plus.svg');
  await download('images/wheel.min.svg', 'wheel.svg');

  await download('externs.min.js', 'externs.js');
  await download('main.min.js', 'main.js');
  await download('scrape-examples.min.js', 'scrape-examples.js');
  await download('search.min.js', 'search.js');
  await download('settings.min.js', 'settings.js');
  await download('source-script.min.js', 'source-script.js');
  await download('storage.min.js', 'storage.js');
}

main();
