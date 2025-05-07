import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { createServer } from 'http-server';
import { defineConfig } from 'rollup';
import { spawn } from 'child_process';
import * as fs from 'fs/promises';

export default defineConfig([
  // The plugin itself
  {
    plugins: [
      typescript(),
      resolve({ extensions: ['.ts', '.tsx', '.json', '.node'] }),
      typedocExampleBuild(),
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
      postcss({ extract: true, sourceMap: true }),
      typedocExampleCopyAssets(),
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
      if (!this.meta.watchMode) {
        return;
      }

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
      if (!this.meta.watchMode) {
        return;
      }

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
