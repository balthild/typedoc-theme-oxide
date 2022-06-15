import { JSX, PageEvent, ProjectReflection } from 'typedoc';

export const project: Template<JSX.Element, PageEvent<ProjectReflection>> = (context, page) => {
    const { model } = page;

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

            {model.groups?.map((group) => {
                if (group.categories) {
                    return group.categories.map((category) => context.subitems(category));
                }
                return context.subitems(group);
            })}
        </>
    );
};
