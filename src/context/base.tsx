import {
  DefaultTheme,
  DefaultThemeRenderContext,
  JSX,
  Options,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  Router,
} from 'typedoc';

import { itemTypeLinkClass, transformTypography } from './utils.js';

export class OxideContextBase extends DefaultThemeRenderContext {
  constructor(router: Router, theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
    super(router, theme, page, options);

    const markdown = this.markdown;
    this.markdown = (text) => transformTypography(markdown(text) ?? '');
  }

  protected logo() {
    return this.relativeURL('assets/oxide/logo.svg') ?? '';
  }

  protected asset(path: string): string {
    return `https://cdn.jsdelivr.net/gh/rust-lang/rust@1.61.0/src/librustdoc/html/static/${path}`;
  }

  protected subitems = (model: ReflectionCategory | ReflectionGroup) => {
    return (
      <>
        <h2 id={`category.${model.title}`} class="small-section-header">
          {model.title}
          <a href={`#category.${model.title}`} class="anchor"></a>
        </h2>

        <div class="item-table">
          {model.children.map((child) => (
            <div class={`item-row ${this.getReflectionClasses(child)}`}>
              <div class="item-left module-item">
                <a
                  class={itemTypeLinkClass(child)}
                  href={this.urlTo(child)}
                  title={child.name}>
                  {child.name}
                </a>
              </div>
              <div class="item-right docblock-short">
                <JSX.Raw html={this.markdown(child.comment?.getShortSummary(true))} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
}
