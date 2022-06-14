import { JSX, PageEvent, Reflection } from 'typedoc';
import { OxideThemeRenderContext } from './OxideThemeRenderContext';

declare global {
    // The generic parameter is used to enforce .tsx files to import the `JSX` namespace
    interface Template<T extends JSX.Element, M = PageEvent<Reflection>> {
        (context: OxideThemeRenderContext, model: M): T;
    }
}

declare module 'typedoc/dist/lib/utils/jsx.elements' {
    interface JsxHtmlGlobalProps {
        role?: string;
        onclick?: string;
    }
}
