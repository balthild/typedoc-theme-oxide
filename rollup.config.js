import { spawn } from 'child_process';
import * as fs from 'fs/promises';

import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { createServer } from 'http-server';
import nested from 'postcss-nested';
import { defineConfig } from 'rollup';
import MinifyHtml from 'rollup-plugin-minify-html-literals';
import postcss from 'rollup-plugin-postcss';

export default defineConfig((args) => [
  // TypeDoc plugin
  {
    plugins: [
      typescript(),
      resolve({ extensions: ['.ts', '.tsx', '.json', '.node'] }),
      args.watch && typedocExampleBuild(),
    ],
    input: 'src/plugin/index.ts',
    external: /(node_modules)/,
    watch: {
      clearScreen: false,
    },
    output: {
      dir: 'dist/plugin',
      format: 'esm',
      sourcemap: true,
      interop: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src/plugin',
    },
  },

  // Frontend assets
  {
    plugins: [
      typescript(),
      resolve({ extensions: ['.ts', '.tsx', '.json', '.node'] }),
      postcss({ extract: true, minimize: !args.watch, sourceMap: true, plugins: [nested()] }),
      !args.watch && terser(),
      !args.watch && MinifyHtml.default(),
      args.watch && typedocExampleCopyAssets(),
    ],
    input: 'src/assets/index.ts',
    context: 'globalThis',
    watch: {
      clearScreen: false,
    },
    output: {
      dir: 'dist/assets',
      format: 'iife',
      interop: 'auto',
      sourcemap: true,
    },
  },
]);

/** @returns {import('rollup').Plugin} */
function typedocExampleBuild() {
  return {
    name: 'typedoc-example-build',
    async writeBundle() {
      const child = spawn('yarn', ['run', 'example:build'], {
        cwd: import.meta.dirname,
        stdio: 'inherit',
      });
      await new Promise((resolve, reject) => {
        child.once('exit', resolve);
        child.once('error', reject);
      });

      startServer();
    },
  };
}

/** @returns {import('rollup').Plugin} */
function typedocExampleCopyAssets() {
  return {
    name: 'typedoc-example-copy-assets',
    async writeBundle() {
      const src = './dist/assets';
      const dest = './example/docs/assets/oxide';

      try {
        await fs.access(`${src}/rustdoc`, fs.constants.F_OK);
        await fs.cp(src, dest, { recursive: true });
      } catch {
        this.warn('Rustdoc front-end assets are missing.');
        this.warn('Please run `yarn download`.');
      }

      startServer();
    },
  };
}

function startServer() {
  if (!globalThis.httpServer) {
    globalThis.httpServer = createServer({ root: './example/docs' });
    globalThis.httpServer.listen(3000);
  }

  console.log('┌──────────────────────────────────────────┐');
  console.log('│ Serving example on http://localhost:3000 │');
  console.log('└──────────────────────────────────────────┘');
}
