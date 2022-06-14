import {
    DefaultThemeRenderContext, JSX, PageEvent, ProjectReflection, ReflectionCategory,
    ReflectionGroup,
} from 'typedoc';

import { itemTypeLinkClass } from './utils';

export const project: Template<JSX.Element, PageEvent<ProjectReflection>> = (context, page) => {
    const { model } = page;

    const blocks: JSX.Element[] = [];
    for (const group of page.model.groups ?? []) {
        if (group.categories) {
            for (const category of group.categories) {
                blocks.push(renderCategory(context, category));
            }
        } else {
            blocks.push(renderCategory(context, group));
        }
    }

    return (
        <>
            <div class="main-heading">
                <h1 class="fqn">
                    <span class="in-band">
                        {model.kindString}
                        {' '}
                        <a href="#" class="mod">{model.name}</a>
                        <button id="copy-path" onclick="copy_path(this)" title="Copy item path to clipboard">
                            <img src={context.rustdocAsset('images/clipboard.svg')} width={19} height={18} alt="Copy item path" />
                        </button>
                    </span>
                </h1>
                <span class="out-of-band">
                    {model.sources?.[0].url && (
                        <>
                            <a class="srclink" href={model.sources[0].url}>source</a>
                            {' · '}
                        </>
                    )}
                    <a id="toggle-all-docs" href="javascript:void(0)" title="collapse all docs">
                        [<span class="inner">−</span>]
                    </a>
                </span>
            </div>

            <details class="rustdoc-toggle top-doc" open>
                <summary class="hideme">
                    <span>Expand description</span>
                </summary>
                <div class="docblock">
                    <JSX.Raw html={context.markdown(page.model.readme)} />
                </div>
            </details>

            {blocks}
        </>
    );
};

function renderCategory(context: DefaultThemeRenderContext, category: ReflectionCategory | ReflectionGroup) {
    return (
        <>
            <h2 id={`category.${category.title}`} class="small-section-header">
                {category.title}
                <a href={`#category.${category.title}`} class="anchor"></a>
            </h2>

            <div class="item-table">
                {category.children.map((child) => {
                    return (
                        <div class={`item-row ${child.cssClasses}`}>
                            <div class="item-left module-item">
                                <a class={itemTypeLinkClass(child)} href={context.urlTo(child)} title={child.name}>
                                    {child.name}
                                </a>
                            </div>
                            <div class="item-right docblock-short">
                                <p>{child.comment?.shortText}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
