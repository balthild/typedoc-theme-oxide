import * as fs from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';
import { deflate } from 'zlib';

import { DefaultTheme, PageEvent, Reflection, RendererEvent } from 'typedoc';

import { createSearchDocument } from '../lib';
import { OxideContext } from './context';
import { itemLink } from './context/utils';
import { renderTextComment } from './utils';

export class OxideTheme extends DefaultTheme {
  getRenderContext(page: PageEvent<Reflection>) {
    return new OxideContext(this.router, this, page, this.application.options);
  }

  async preRender(event: RendererEvent) {
    super.preRender(event);

    const document = createSearchDocument();

    this.application.renderer.router!.getLinkTargets()
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
            url: itemLink(this.router!, item, false),
          });
        } catch {
          // the target do not have a url
        }
      });

    const parts: Record<string, any> = {};
    document.export((key, data) => {
      this.application.logger.info(`search index part: ${key}`);
      parts[key] = JSON.parse(data);
    });

    const buffer = await promisify(deflate)(Buffer.from(JSON.stringify(parts)));

    const dest = path.join(event.outputDirectory, 'assets', 'oxide');
    await fs.mkdir(dest, { recursive: true });
    await fs.writeFile(path.join(dest, 'search-index.deflate'), buffer);
  }

  async postRender(event: RendererEvent) {
    super.postRender(event);

    const src = path.join(import.meta.dirname, '..', 'assets');
    const dest = path.join(event.outputDirectory, 'assets', 'oxide');

    try {
      await fs.access(src, fs.constants.F_OK);
      await fs.access(path.join(src, 'rustdoc'), fs.constants.F_OK);
      await fs.mkdir(dest, { recursive: true });
      await fs.cp(src, dest, { recursive: true });
    } catch (e) {
      console.log(e);
      this.application.logger.error('some front-end assets are missing.');
      this.application.logger.error('users of the theme should not see this, or I must have done something silly.');
    }
  }
}
