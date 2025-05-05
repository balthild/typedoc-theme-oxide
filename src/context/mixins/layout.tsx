import { JSX, PageEvent, Reflection, RenderTemplate } from 'typedoc';

import { OxideContextBase } from '../base.js';

type Template = RenderTemplate<PageEvent<Reflection>>;

export const LayoutMixin = (base: typeof OxideContextBase) =>
  class extends base {
    defaultLayout = (template: Template, page: PageEvent<Reflection>) => {
      return (
        <html class="default">
          {this.__layout_head(page)}

          <body class="rustdoc">
            <JSX.Raw html="<!--[if lte IE 11]>" />
            <div class="warning">
              This old browser is unsupported and will most likely display funky things.
            </div>
            <JSX.Raw html="<![endif]-->" />

            {this.hook('body.begin', this)}

            {this.__layout_topbar()}
            {this.__layout_sidebar(page)}
            {this.__layout_main(template, page)}

            {this.hook('body.end', this)}

            <div
              id="rustdoc-vars"
              data-root-path={this.relativeURL('index.html')}
              data-current-crate={page.project.name}
              data-themes="light,dark,ayu"
              data-resource-suffix=""
              data-rustdoc-version="1.61.0"
            />
          </body>
        </html>
      );
    };

    private __layout_head(page: PageEvent<Reflection>) {
      const model = page.model;
      const project = page.project;
      const title = model.name === project.name ? project.name : `${model.name} | ${project.name}`;

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
              href={this.rustdocAsset(font)}
            />
          ))}

          <link rel="stylesheet" type="text/css" href={this.rustdocAsset('css/normalize.min.css')} />
          <link
            rel="stylesheet"
            type="text/css"
            href={this.relativeURL('assets/oxide/rustdoc/rustdoc.patched.min.css')}
            id="mainThemeStyle"
          />
          <link rel="stylesheet" type="text/css" href={this.rustdocAsset('css/themes/light.min.css')} id="themeStyle" />
          <link rel="stylesheet" type="text/css" href={this.rustdocAsset('css/themes/dark.min.css')} disabled />
          <link rel="stylesheet" type="text/css" href={this.rustdocAsset('css/themes/ayu.min.css')} disabled />

          <script src={this.rustdocAsset('js/storage.min.js')}></script>
          <script defer src={this.rustdocAsset('js/main.min.js')}></script>
          <noscript>
            <link rel="stylesheet" href={this.rustdocAsset('css/noscript.min.css')} />
          </noscript>

          <link rel="stylesheet" href={this.relativeURL('assets/highlight.css')} />
          <link rel="stylesheet" href={this.relativeURL('assets/oxide/style.css')} />

          {this.options.getValue('customCss') && <link rel="stylesheet" href={this.relativeURL('assets/custom.css')} />}
          {this.hook('head.end', this)}
        </head>
      );
    }

    private __layout_topbar() {
      return (
        <nav class="mobile-topbar">
          <button class="sidebar-menu-toggle">&#9776;</button>
          <a class="sidebar-logo" href={this.relativeURL('index.html')}>
            <div class="logo-container">
              <img class="rust-logo" src={this.logo()} alt="logo" />
            </div>
          </a>
          <h2 class="location"></h2>
        </nav>
      );
    }

    private __layout_sidebar(page: PageEvent<Reflection>) {
      return (
        <nav class="sidebar">
          <a class="sidebar-logo" href={this.relativeURL('index.html')}>
            <div class="logo-container">
              <img class="rust-logo" src={this.logo()} alt="logo" />
            </div>
          </a>
          {this.hook('sidebar.begin', this)}
          {this.navigation(page)}
          {this.hook('sidebar.end', this)}
        </nav>
      );
    }

    private __layout_main(template: Template, page: PageEvent<Reflection>) {
      return (
        <main>
          <div class="width-limiter">
            <div class="sub-container">
              <a class="sub-logo-container" href={this.relativeURL('index.html')}>
                <img class="rust-logo" src={this.logo()} alt="logo" />
              </a>

              {this.__layout_settings()}
            </div>

            <section id="main-content" class="content">
              {this.hook('content.begin', this)}
              {template(page)}
              {this.hook('content.end', this)}
            </section>

            <section id="search" class="content hidden"></section>
          </div>
        </main>
      );
    }

    private __layout_settings() {
      // TODO

      return (
        <nav class="sub">
          <div class="theme-picker hidden">
            <button id="theme-picker" aria-label="Pick another theme!" aria-haspopup="menu" title="themes">
              <img
                width={22}
                height={22}
                alt="Pick another theme!"
                src={this.rustdocAsset('images/brush.svg')}
              />
            </button>
            <div id="theme-choices" role="menu"></div>
          </div>

          <form class="search-form">
            <div class="search-container">
              <span></span>
              {/* This empty span is a hacky fix for Safari - See rust-lang/rust#93184 */}

              <input
                class="search-input"
                name="search"
                autocomplete="off"
                spellcheck={false}
                placeholder="Click or press ‘S’ to search, ‘?’ for more options…"
                type="search"
              />

              <button type="button" id="help-button" title="help">?</button>

              <a id="settings-menu" href={this.relativeURL('settings.html')} title="settings">
                <img
                  width={22}
                  height={22}
                  alt="Change settings"
                  src={this.rustdocAsset('images/wheel.svg')}
                />
              </a>
            </div>
          </form>
        </nav>
      );
    }
  };
