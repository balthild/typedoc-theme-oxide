import { DefaultTheme, PageEvent, Renderer } from 'typedoc';

import { OxideThemeRenderContext } from './OxideThemeRenderContext';

export class OxideTheme extends DefaultTheme {
    private context: OxideThemeRenderContext;

    constructor(renderer: Renderer) {
        super(renderer);
        this.context = new OxideThemeRenderContext(this, this.application.options);
    }

    getRenderContext(_pageEvent: PageEvent<any>) {
        return this.context;
    }
}
