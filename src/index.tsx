/// <reference path="./jsx.d.ts" />

import * as fs from 'fs';
import * as path from 'path';
import { Application, RendererEvent } from 'typedoc';

import { OxideTheme } from './OxideTheme';

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
    app.renderer.defineTheme("oxide", OxideTheme);

    app.listenToOnce(app.renderer, {
        [RendererEvent.END]: (event: RendererEvent) => {
            const src = path.join(__dirname, '..', 'assets');
            const dest = path.join(event.outputDirectory, 'assets', 'oxide');
            copySync(src, dest);
        },
    });
}

// Copied from typedoc/src/lib/utils/fs.ts
export function copySync(src: string, dest: string): void {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
        const contained = fs.readdirSync(src);
        contained.forEach((file) =>
            copySync(path.join(src, file), path.join(dest, file))
        );
    } else if (stat.isFile()) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
    } else {
        // Do nothing for FIFO, special devices.
    }
}
