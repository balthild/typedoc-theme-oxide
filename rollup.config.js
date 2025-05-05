const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const { createServer } = require('http-server');
const { spawn } = require('child_process');
const { defineConfig } = require('rollup');

module.exports = defineConfig((args) => [
  // The plugin itself
  {
    plugins: [
      typescript(),
      resolve({ extensions: ['.ts', '.tsx', '.json', '.node'] }),
      args.watch && example(),
    ],
    input: 'src/index.ts',
    external: /(node_modules)/,
    watch: {
      clearScreen: false,
    },
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
      preserveModules: true,
    },
  },

  // Frontend assets
  {
    plugins: [
      typescript(),
      resolve({ extensions: ['.ts', '.tsx', '.json', '.node'] }),
      commonjs({ include: ['node_modules/lunr/lunr.js'] }),
      postcss({ extract: true }),
      args.watch && example(),
    ],
    input: 'src/assets/index.ts',
    watch: {
      clearScreen: false,
    },
    output: {
      file: 'dist/assets/index.js',
      format: 'iife',
      interop: 'auto',
      sourcemap: true,
    },
  },
]);

function example() {
  if (!globalThis.httpServer) {
    globalThis.httpServer = createServer({ root: './example/docs' });
    globalThis.httpServer.listen(3000);
  }

  return {
    name: 'typedoc-example',
    async writeBundle() {
      const child = spawn('yarn', ['run', 'example:build'], {
        cwd: __dirname,
        stdio: 'inherit',
      });
      await new Promise((resolve, reject) => {
        child.once('exit', resolve);
        child.once('error', reject);
      });

      console.log(cyan('[info]'), 'Serving example on', cyan('http://localhost:3000'));
    },
  };
}

function cyan(text) {
  return `\x1b[36m${text}\x1b[0m`;
}
