import {
  DefaultTheme,
  DefaultThemeRenderContext,
  Options,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  Router,
} from 'typedoc';

import { itemLink, itemSlug, ReflectionWithLink, sectionSlug, transformTypography } from './utils';

export class OxideContextBase extends DefaultThemeRenderContext {
  constructor(router: Router, theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
    super(router, theme, page, options);

    const markdown = this.markdown;
    this.markdown = (text) => transformTypography(markdown(text) ?? '');
  }

  protected logo() {
    return this.relativeURL('assets/oxide/logo.svg') ?? '';
  }

  protected rustdocAsset(path: string): string {
    return `https://cdn.jsdelivr.net/gh/rust-lang/rust@1.86.0/src/librustdoc/html/static/${path}`;
  }

  protected sectionSlug(section: ReflectionGroup | ReflectionCategory) {
    return sectionSlug(section);
  }

  protected itemSlug(item: ReflectionWithLink) {
    return itemSlug(item);
  }

  protected itemLink(item: ReflectionWithLink, forceNested: boolean) {
    return itemLink(this, item, forceNested);
  }
}
