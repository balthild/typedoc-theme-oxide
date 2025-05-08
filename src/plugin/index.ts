import * as fs from 'fs/promises';
import * as path from 'path';
import { deflate } from 'zlib';

import { Application, Reflection, RendererEvent } from 'typedoc';

import { createSearchDocument } from '../lib';
import { itemLink } from './context/utils';
import { OxideTheme } from './theme';
import { renderTextComment } from './utils';

declare module 'typedoc' {
  namespace JSX.JSX {
    interface IntrinsicElements {
      'rustdoc-search': IntrinsicAttributes;
      'rustdoc-toolbar': IntrinsicAttributes;
      'oxide-search-results': IntrinsicAttributes;
    }

    interface IntrinsicAttributes {
      onclick?: string;
    }
  }
}

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
  app.renderer.defineTheme('oxide', OxideTheme);

  app.renderer.preRenderAsyncJobs.push(async (event: RendererEvent) => {
    const document = createSearchDocument();

    app.renderer.router!.getLinkTargets()
      .filter((x) => x instanceof Reflection)
      .filter((x) => x.isDeclaration() || x.isDocument())
      .filter((x) => x.name && !x.flags.isExternal)
      .forEach((item) => {
        try {
          document.add({
            id: item.id,
            name: item.name,
            comment: renderTextComment(item),
            kind: item.kind,
            parent: item.parent?.isProject() ? '' : item.parent?.getFullName() ?? '',
            url: itemLink(app.renderer.router!, item, false),
          });
        } catch {}
      });

    const parts: Record<string, any> = {};
    await document.export(async function (key, data) {
      app.logger.info(`Search index part: ${key}`);
      parts[key] = JSON.parse(data);
    });

    const buffer = await new Promise<Buffer>((resolve, reject) => {
      deflate(Buffer.from(JSON.stringify(parts)), (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    const dest = path.join(event.outputDirectory, 'assets', 'oxide');
    await fs.mkdir(dest, { recursive: true });
    await fs.writeFile(path.join(dest, 'search-index.defalte'), buffer);
  });

  app.renderer.postRenderAsyncJobs.push(async (event: RendererEvent) => {
    const src = path.join(import.meta.dirname, '..', 'assets');
    const dest = path.join(event.outputDirectory, 'assets', 'oxide');

    try {
      await fs.access(src, fs.constants.F_OK);
      await fs.access(path.join(src, 'rustdoc'), fs.constants.F_OK);
      await fs.mkdir(dest, { recursive: true });
      await fs.cp(src, dest, { recursive: true });
    } catch (e) {
      console.log(e);
      app.logger.error('Some front-end assets are missing.');
      app.logger.error('User of the oxide theme should not see this, or I must did something silly.');
    }
  });
}
