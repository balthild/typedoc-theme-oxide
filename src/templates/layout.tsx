import { JSX } from 'typedoc';

export const layout: Template<JSX.Element> = (context, page) => {
    const model = page.model;
    const project = page.project;
    const title = model.name === project.name ? project.name : `${model.name} | ${project.name}`;

    const logoUrl = context.relativeURL('assets/oxide/logo.svg') ?? '';

    return (
        <html class="default">
            <head>
                <meta charSet="utf-8" />
                {context.hook("head.begin")}
                <meta http-equiv="x-ua-compatible" content="IE=edge" />
                <title>{title}</title>
                <meta name="description" content={"Documentation for " + project.name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/SourceSerif4-Regular.ttf.woff2')} />
                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/FiraSans-Regular.woff2')} />
                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/FiraSans-Medium.woff2')} />
                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/SourceCodePro-Regular.ttf.woff2')} />
                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/SourceSerif4-Bold.ttf.woff2')} />
                <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={context.rustdocAsset('fonts/SourceCodePro-Semibold.ttf.woff2')} />

                <link rel="stylesheet" type="text/css" href={context.rustdocAsset('css/normalize.min.css')} />
                <link rel="stylesheet" type="text/css" href={context.relativeURL("assets/oxide/rustdoc/rustdoc.patched.min.css")} id="mainThemeStyle" />
                <link rel="stylesheet" type="text/css" href={context.rustdocAsset('css/themes/light.min.css')} id="themeStyle" />
                <link rel="stylesheet" type="text/css" href={context.rustdocAsset('css/themes/dark.min.css')} disabled />
                <link rel="stylesheet" type="text/css" href={context.rustdocAsset('css/themes/ayu.min.css')} disabled />

                <script src={context.rustdocAsset('js/storage.min.js')}></script>
                <script defer src={context.rustdocAsset('js/main.min.js')}></script>
                <noscript>
                    <link rel="stylesheet" href={context.rustdocAsset('css/noscript.min.css')} />
                </noscript>

                <link rel="stylesheet" href={context.relativeURL("assets/highlight.css")} />
                <link rel="stylesheet" href={context.relativeURL("assets/oxide/style.css")} />

                {context.options.getValue("customCss") && (
                    <link rel="stylesheet" href={context.relativeURL("assets/custom.css")} />
                )}
                {context.hook("head.end")}
            </head>
            <body class="rustdoc">
                <JSX.Raw html="<!--[if lte IE 11]>" />
                <div class="warning">
                    This old browser is unsupported and will most likely display funky things.
                </div>
                <JSX.Raw html="<![endif]-->" />

                {context.hook("body.begin")}

                <nav class="mobile-topbar">
                    <button class="sidebar-menu-toggle">&#9776;</button>
                    <a class="sidebar-logo" href={context.relativeURL("index.html")}>
                        <div class="logo-container">
                            <img class="rust-logo" src={logoUrl} alt="logo" />
                        </div>
                    </a>
                    <h2 class="location"></h2>
                </nav>

                <nav class="sidebar">
                    <a class="sidebar-logo" href={context.relativeURL("index.html")}>
                        <div class="logo-container">
                            <img class="rust-logo" src={logoUrl} alt="logo" />
                        </div>
                    </a>
                    {context.hook("navigation.begin")}
                    {context.navigation(page)}
                    {context.hook("navigation.end")}
                </nav>

                <main>
                    <div class="width-limiter">
                        <div class="sub-container">
                            <a class="sub-logo-container" href={context.relativeURL("index.html")}>
                                <img class="rust-logo" src={logoUrl} alt="logo" />
                            </a>
                            {/* TODO */}
                            <nav class="sub">
                                <div class="theme-picker hidden">
                                    <button id="theme-picker" aria-label="Pick another theme!" aria-haspopup="menu" title="themes">
                                        <img width={22} height={22} alt="Pick another theme!" src={context.rustdocAsset('images/brush.svg')} />
                                    </button>
                                    <div id="theme-choices" role="menu"></div>
                                </div>
                                <form class="search-form">
                                    <div class="search-container">
                                        <span></span>{/* This empty span is a hacky fix for Safari - See #93184 */}
                                        <input
                                            class="search-input"
                                            name="search"
                                            autocomplete="off"
                                            spellcheck={false}
                                            placeholder="Click or press ‘S’ to search, ‘?’ for more options…"
                                            type="search"
                                        />
                                        <button type="button" id="help-button" title="help">?</button>
                                        <a id="settings-menu" href={context.relativeURL("settings.html")} title="settings">
                                            <img width={22} height={22} alt="Change settings" src={context.rustdocAsset('images/wheel.svg')} />
                                        </a>
                                    </div>
                                </form>
                            </nav>
                        </div>
                        <section id="main-content" class="content">
                            {context.hook("content.begin")}
                            {page.template(page)}
                            {context.hook("content.end")}
                        </section>
                        <section id="search" class="content hidden"></section>
                    </div>
                </main>

                {context.analytics()}
                {context.hook("body.end")}

                <div id="rustdoc-vars"
                    data-root-path={context.relativeURL("index.html")}
                    data-current-crate={project.name}
                    data-themes="light,dark,ayu"
                    data-resource-suffix=""
                    data-rustdoc-version="1.61.0"
                />
            </body>
        </html>
    );
};
