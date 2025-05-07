import { DefaultTheme, PageEvent, Reflection } from 'typedoc';

import { OxideContext } from './context';

export class OxideTheme extends DefaultTheme {
  getRenderContext(page: PageEvent<Reflection>) {
    return new OxideContext(this.router, this, page, this.application.options);
  }
}
