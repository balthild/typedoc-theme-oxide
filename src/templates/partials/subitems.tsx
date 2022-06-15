import { JSX, ReflectionCategory, ReflectionGroup } from 'typedoc';

import { itemTypeLinkClass } from '../utils';

export const subitems: Template<JSX.Element, ReflectionCategory | ReflectionGroup> = (context, category) => {
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
                                <a
                                    class={itemTypeLinkClass(child)}
                                    href={context.urlTo(child)}
                                    title={child.name}
                                >
                                    {child.name}
                                </a>
                            </div>
                            <div class="item-right docblock-short">
                                <JSX.Raw html={context.markdown(child.comment?.shortText)} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
