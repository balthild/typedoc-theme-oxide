import { Application } from 'typedoc';

import { OxideTheme } from './theme';

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
}
