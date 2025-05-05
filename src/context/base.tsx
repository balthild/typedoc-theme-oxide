import slug from 'slug';
import {
  DeclarationReflection,
  DefaultTheme,
  DefaultThemeRenderContext,
  DocumentReflection,
  Options,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  Router,
} from 'typedoc';

import { transformTypography } from './utils';

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
    return slug(`section ${section.title}`);
  }

  protected itemSlug(item: DeclarationReflection | DocumentReflection) {
    const kind = ReflectionKind.classString(item.kind).replace('tsd-kind-', '');
    return slug(`${kind} ${item.name}`);
  }

  protected itemLink(item: DeclarationReflection | DocumentReflection, nested: boolean) {
    if (nested || !item.parent) {
      return this.urlTo(item);
    }

    const url = this.urlTo(item.parent);
    const anchor = this.itemSlug(item);
    if (typeof url !== 'undefined') {
      return `${url}#${anchor}`;
    }

    return this.urlTo(item);
  }
}
