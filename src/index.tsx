/// <reference path="./types.d.ts" />

import * as fs from 'fs/promises';
import * as path from 'path';

import { Application, RendererEvent } from 'typedoc';

import { OxideTheme } from './theme.js';

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
  app.renderer.defineTheme('oxide', OxideTheme);

  app.renderer.postRenderAsyncJobs.push(async (output: RendererEvent) => {
    const src = path.join(__dirname, '..', 'assets');
    const dest = path.join(output.outputDirectory, 'assets', 'oxide');
    await copyAll(src, dest);
  });
}

async function copyAll(src: string, dest: string) {
  const stat = await fs.stat(src);

  if (stat.isFile()) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    return;
  }

  if (stat.isDirectory()) {
    for (const file of await fs.readdir(src)) {
      await copyAll(path.join(src, file), path.join(dest, file));
    }
  }
}
