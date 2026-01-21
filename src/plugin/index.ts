import * as fs from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';
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
            parent: item.parent?.isProject() ? '' : item.parent?.getFriendlyFullName() ?? '',
            url: itemLink(app.renderer.router!, item, false),
          });
        } catch (e) {
          app.logger.error(`error building search index for ${item.name}: ${e}`);
        }
      });

    const parts: Record<string, any> = {};
    document.export((key, data) => {
      app.logger.info(`Search index part: ${key}`);
      parts[key] = JSON.parse(data);
    });

    const buffer = await promisify(deflate)(Buffer.from(JSON.stringify(parts)));

    const dest = path.join(event.outputDirectory, 'assets', 'oxide');
    await fs.mkdir(dest, { recursive: true });
    await fs.writeFile(path.join(dest, 'search-index.deflate'), buffer);
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
