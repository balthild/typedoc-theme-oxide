import { JSX, PageEvent, Reflection, RenderTemplate } from 'typedoc';

import { OxideContextBase } from '../base';

type Template = RenderTemplate<PageEvent<Reflection>>;

export const LayoutMixin = (base: typeof OxideContextBase) =>
  class extends base {
    defaultLayout = (template: Template, page: PageEvent<Reflection>) => {
      return (
        <html lang={this.options.getValue('lang')} data-base={this.relativeURL('./')}>
          {this.#head(page)}

          <body class="rustdoc">
            <JSX.Raw html="<!--[if lte IE 11]>" />
            <div class="warning">
              This old browser is unsupported and will most likely display funky things.
            </div>
            <JSX.Raw html="<![endif]-->" />

            {this.hook('body.begin', this)}

            {this.#topbar(page)}
            {this.#sidebar(page)}
            {this.#main(template, page)}

            {this.hook('body.end', this)}
          </body>
        </html>
      );
    };

    #head(page: PageEvent<Reflection>) {
      const model = page.model;
      const project = page.project;

      let title = model.name;
      const parent = model.parent?.getFriendlyFullName();
      if (parent) {
        title = `${title} in ${parent}`;
      }
      if (model.name !== project.name) {
        title = `${title} - ${project.name}`;
      }

      const fonts = [
        'fonts/SourceSerif4-Regular.ttf.woff2',
        'fonts/FiraSans-Regular.woff2',
        'fonts/FiraSans-Medium.woff2',
        'fonts/SourceCodePro-Regular.ttf.woff2',
        'fonts/SourceSerif4-Bold.ttf.woff2',
        'fonts/SourceCodePro-Semibold.ttf.woff2',
      ];

      return (
        <head>
          <meta charset="utf-8" />
          {this.hook('head.begin', this)}
          <meta http-equiv="x-ua-compatible" content="IE=edge" />
          <title>{title}</title>
          <meta name="description" content={'Documentation for ' + project.name} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {fonts.map((font) => (
            <link
              rel="preload"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
              href={rustdocAsset(font)}
            />
          ))}

          <link rel="stylesheet" type="text/css" href={rustdocAsset('css/normalize.min.css')} />
          <link
            rel="stylesheet"
            type="text/css"
            href={this.relativeURL('assets/oxide/rustdoc/rustdoc.css')}
          />

          <meta
            name="rustdoc-vars"
            data-root-path={this.relativeURL('')}
            data-static-root-path={this.relativeURL('assets/oxide/rustdoc/')}
            data-current-crate={page.project.name}
            data-themes=""
            data-resource-suffix=""
            data-rustdoc-version="1.86.0"
            data-channel="1.86.0"
            data-search-js="search.js"
            data-settings-js="settings.js"
          />

          <script src={rustdocAsset('js/storage.min.js')}></script>
          <script defer src={this.relativeURL('assets/oxide/rustdoc/main.js')}></script>
          <noscript>
            <link rel="stylesheet" href={rustdocAsset('css/noscript.min.css')} />
          </noscript>

          <link rel="stylesheet" href={this.relativeURL('assets/highlight.css')} />
          <link rel="stylesheet" href={this.relativeURL('assets/oxide/index.css')} />
          <script src={this.relativeURL('assets/oxide/index.js')}></script>

          {this.options.getValue('customCss') && <link rel="stylesheet" href={this.relativeURL('assets/custom.css')} />}
          {this.hook('head.end', this)}
        </head>
      );
    }

    #topbar(page: PageEvent<Reflection>) {
      const { project } = page;

      return (
        <nav class="mobile-topbar">
          <button class="sidebar-menu-toggle" title="show sidebar"></button>
          <h2 class="location">
            <a href="#">{project.name}</a>
          </h2>
        </nav>
      );
    }

    #sidebar(page: PageEvent<Reflection>) {
      const { project } = page;

      return (
        <>
          <nav class="sidebar">
            <div class="sidebar-crate">
              <h2>
                <a href={this.relativeURL('index.html')}>{project.name}</a>
                <span class="version">{project.packageVersion}</span>
              </h2>
            </div>

            {this.hook('sidebar.begin', this)}
            {this.navigation(page)}
            {this.hook('sidebar.end', this)}
          </nav>
          <div class="sidebar-resizer" />
        </>
      );
    }

    #main(template: Template, page: PageEvent<Reflection>) {
      return (
        <main>
          <div class="width-limiter">
            <rustdoc-search />

            <section id="main-content" class="content">
              {this.hook('content.begin', this)}
              {template(page)}
              {this.hook('content.end', this)}
            </section>

            <section id="alternative-display" class="content hidden">
              <oxide-search-results id="search" />
            </section>
          </div>
        </main>
      );
    }
  };

function rustdocAsset(path: string) {
  return `https://cdn.jsdelivr.net/gh/rust-lang/rust@1.86.0/src/librustdoc/html/static/${path}`;
}
