import { DefaultTheme, DefaultThemeRenderContext, Options } from 'typedoc';

import * as templates from './templates';
import { transformTypography } from './templates/utils';

export class OxideThemeRenderContext extends DefaultThemeRenderContext {
    constructor(theme: DefaultTheme, options: Options) {
        super(theme, options);

        // Markdown Renderer
        const markdown = this.markdown;
        this.markdown = (text) => transformTypography(markdown(text) ?? '');
    }

    // Layouts
    defaultLayout = templates.bindContext(templates.layout, this);

    // Pages
    indexTemplate = templates.bindContext(templates.project, this);
    reflectionTemplate = templates.bindContext(templates.container, this);

    // Partials
    navigation = templates.bindContext(templates.navigation, this);
    members = templates.bindContext(templates.members, this);
    comment = templates.bindContext(templates.comment, this);
    subitems = templates.bindContext(templates.subitems, this);

    rustdocAsset(path: string): string {
        return `https://cdn.jsdelivr.net/gh/rust-lang/rust@1.61.0/src/librustdoc/html/static/${path}`;
    }
}
