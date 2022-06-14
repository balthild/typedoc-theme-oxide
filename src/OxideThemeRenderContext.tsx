import { DefaultTheme, DefaultThemeRenderContext, Options } from 'typedoc';

import * as templates from './templates';
import { transformTypography } from './templates/utils';

export class OxideThemeRenderContext extends DefaultThemeRenderContext {
    constructor(theme: DefaultTheme, options: Options) {
        super(theme, options);

        // Layouts
        this.defaultLayout = templates.bindContext(templates.layout, this);

        // Templates
        this.indexTemplate = templates.bindContext(templates.project, this);
        this.reflectionTemplate = templates.bindContext(templates.container, this);

        // Partials
        this.navigation = templates.bindContext(templates.navigation, this);
        this.members = templates.bindContext(templates.members, this);
        this.comment = templates.bindContext(templates.comment, this);

        // Markdown Renderer
        const markdown = this.markdown;
        this.markdown = (text) => transformTypography(markdown(text) ?? '');
    }

    rustdocAsset(path: string): string {
        return `https://cdn.jsdelivr.net/gh/rust-lang/rust@1.61.0/src/librustdoc/html/static/${path}`;
    }
}
