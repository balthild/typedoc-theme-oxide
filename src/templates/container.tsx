import {
    ContainerReflection, DeclarationReflection, JSX, PageEvent, Reflection, ReflectionKind,
} from 'typedoc';

import { OxideThemeRenderContext } from '../OxideThemeRenderContext';
import { itemTypeLinkClass } from './utils';

export const container: Template<JSX.Element, PageEvent<ContainerReflection>> = (context, page) => {
    const { model } = page;

    return (
        <>
            <div class="main-heading">
                <h1 class="fqn">
                    <span class="in-band">
                        {model.kindString}
                        {' '}
                        {renderFullName(context, model)}
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

            {model.hasComment() && (
                <details class="rustdoc-toggle top-doc" open>
                    <summary class="hideme"><span>Expand description</span></summary>
                    <div class="docblock">{context.comment(model)}</div>
                </details>
            )}

            {context.members(model)}
        </>
    );
};

function renderFullName(
    context: OxideThemeRenderContext,
    model: Reflection | undefined,
    trailing = true,
): JSX.Children[] {
    if (model === undefined || (model.isProject() && !trailing)) {
        return [];
    }

    if (model.kindOf(
        ReflectionKind.ConstructorSignature |
        ReflectionKind.CallSignature |
        ReflectionKind.GetSignature |
        ReflectionKind.SetSignature
    )) {
        return renderFullName(context, model.parent);
    }

    const trail: JSX.Children[] = [];
    if (trailing) {
        const className = itemTypeLinkClass(model as DeclarationReflection);
        trail.push(<a href="#" class={className}>{model.name}</a>);
    } else {
        trail.push(<a href={context.urlTo(model)}>{model.name}</a>);
        trail.push('.');
        trail.push(<wbr />);
    }

    return renderFullName(context, model.parent, false).concat(trail);
}
