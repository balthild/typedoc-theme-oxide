import {
    ContainerReflection, DeclarationReflection, DefaultThemeRenderContext as Context, JSX,
    ReferenceReflection, ReflectionCategory, ReflectionFlag, ReflectionGroup, ReflectionKind,
    SignatureReflection,
} from 'typedoc';

import { renderTypeParametersSignature, wbr } from '../../typedoc.output.themes.lib';
import { transformElement } from '../utils';

export const members: Template<JSX.Element, ContainerReflection> = (context, model) => {
    if (model.categories?.length) {
        const categories = model.categories.filter((x) => !x.allChildrenHaveOwnDocument());
        const subitems = model.categories.filter((x) => x.allChildrenHaveOwnDocument());

        return (
            <>
                {categories.map((x) => renderCategory(context, x))}
                {subitems.map((x) => context.subitems(x))}
            </>
        );
    }

    const groups = model.groups?.filter((x) => !x.allChildrenHaveOwnDocument());
    const subitems = model.groups?.filter((x) => x.allChildrenHaveOwnDocument());

    return (
        <>
            {groups?.map((x) => renderGroup(context, x))}
            {subitems?.map((x) => context.subitems(x))}
        </>
    );
}

function renderCategory(context: Context, category: ReflectionCategory) {
    if (category.allChildrenHaveOwnDocument()) {
        return;
    }

    return (
        <>
            <h2 id={`category.${category.title}`} class="small-section-header">
                {category.title}
                <a href={`#category.${category.title}`} class="anchor"></a>
            </h2>

            {category.children.map((item) => !item.hasOwnDocument && renderMember(context, item))}
        </>
    );
}

function renderGroup(context: Context, group: ReflectionGroup) {
    if (group.categories) {
        return <>{group.categories.map((x) => renderCategory(context, x))}</>;
    }

    return (
        <>
            <h2 id={`group.${group.title}`} class="small-section-header">
                {group.title}
                <a href={`#group.${group.title}`} class="anchor"></a>
            </h2>

            {group.children.map((item) => !item.hasOwnDocument && renderMember(context, item))}
        </>
    );
}

function renderMember(context: Context, member: DeclarationReflection) {
    const srcLink = member.sources?.[0].url;

    return (
        <div>
            <details class="rustdoc-toggle implementors-toggle" open>
                <summary>
                    <section id={member.anchor} class={`impl ${srcLink ? 'has-srclink' : ''}`}>
                        {srcLink && (
                            <span class="rightside">
                                <a class="srclink" href={srcLink}>source</a>
                            </span>
                        )}
                        <a href={`#${member.anchor}`} class="anchor"></a>
                        <h3 class="code-header in-band">
                            {member.name}
                        </h3>
                    </section>
                </summary>
                <div class="impl-items">
                    {renderMemberDetail(context, member)}
                    {/* TODO: member.groups */}
                </div>
            </details>
        </div>
    );
}

function renderMemberDetail(context: Context, member: DeclarationReflection) {
    if (member.signatures?.length) {
        // methods
        return member.signatures?.map((x) => renderSignature(context, x));
    } else if (member.hasGetterOrSetter()) {
        // accessor fields
        return [
            member.getSignature && renderSignature(context, member.getSignature, 'get'),
            member.setSignature && renderSignature(context, member.setSignature, 'set'),
        ];
    } else if (member instanceof ReferenceReflection) {
        // re-exports?
        // TODO
        debugger;
        return context.memberReference(member);
    } else {
        // type aliases, variables, fields and enum members
        return renderDeclaration(context, member);
    }
}

function renderSignature(context: Context, signature: SignatureReflection, titlePrefix?: string) {
    const srcLink = signature.sources?.[0].url;

    return (
        <details class="rustdoc-toggle method-toggle" open>
            <summary>
                <section id={signature.anchor} class={`method ${srcLink ? 'has-srclink' : ''}`}>
                    {srcLink && (
                        <span class="rightside">
                            <a class="srclink" href={srcLink}>source</a>
                        </span>
                    )}
                    <a href={`#${signature.anchor}`} class="anchor"></a>
                    <h4 class="code-header">
                        {titlePrefix && (
                            <span>{titlePrefix}{' '}</span>
                        )}
                        {renderSignatureTitle(context, signature)}
                    </h4>
                </section>
            </summary>
            <div class="docblock">
                {context.comment(signature)}
            </div>
        </details>
    );
}

function renderSignatureTitle(context: Context, signature: SignatureReflection) {
    const title = context.memberSignatureTitle(signature, {
        hideName: true,
    });

    return transformClassName(title);
}

function renderDeclaration(context: Context, decl: DeclarationReflection) {
    const srcLink = decl.sources?.[0].url;

    let prefix;
    if (decl.kindOf(ReflectionKind.SomeType)) {
        prefix = 'type ';
    } else if (decl.kindOf(ReflectionKind.SomeValue)) {
        if (decl.flags.hasFlag(ReflectionFlag.Const)) {
            prefix = 'const ';
        } else if (decl.flags.hasFlag(ReflectionFlag.Let)) {
            prefix = 'let ';
        } else {
            prefix = 'var ';
        }
    }

    let typeSep;
    if (decl.kindOf(ReflectionKind.SomeType)) {
        typeSep = ' = ';
    } else {
        typeSep = decl.flags.isOptional ? '?: ' : ': ';
    }

    let defaultValue: JSX.Children = decl.defaultValue;
    if (isStringNumberLiteral(defaultValue)) {
        defaultValue = <span class="macro">{decl.defaultValue}</span>;
    } else if (isPrimitiveType(defaultValue)) {
        defaultValue = <span class="primitive">{decl.defaultValue}</span>;
    }

    return (
        <details class="rustdoc-toggle method-toggle" open>
            <summary>
                <section id={decl.anchor} class={`method ${srcLink ? 'has-srclink' : ''}`}>
                    {srcLink && (
                        <span class="rightside">
                            <a class="srclink" href={srcLink}>source</a>
                        </span>
                    )}
                    <a href={`#${decl.anchor}`} class="anchor"></a>
                    <h4 class="code-header">
                        {prefix}

                        {wbr(decl.name)}
                        {transformClassName(renderTypeParametersSignature(decl.typeParameters))}

                        {decl.type && (
                            <>
                                {typeSep}
                                {transformClassName(context.type(decl.type))}
                            </>
                        )}

                        {defaultValue && !decl.kindOf(ReflectionKind.EnumMember) && (
                            <>
                                {' = '}
                                {defaultValue}
                            </>
                        )}
                    </h4>
                </section>
            </summary>
            <div class="docblock">
                {context.comment(decl)}
            </div>
        </details>
    );
}

function transformClassName(children: JSX.Children) {
    return transformElement(children, (element) => {
        const props = {
            class: undefined as string | undefined,
            'data-tsd-kind': undefined as string | undefined,
            ...element.props,
        };

        if (element.tag !== 'a' && props.class) {
            const classes = props.class.trim().split(/\s+/);
            if (classes.includes('tsd-signature-type')) {
                const firstChild = element.children[0];
                if (isStringNumberLiteral(firstChild)) {
                    classes.push('macro');
                } else if (isPrimitiveType(firstChild)) {
                    classes.push('primitive');
                } else if (props['data-tsd-kind'] === 'Type parameter') {
                    classes.push('trait');
                } else {
                    classes.push('foreigntype');
                }
            }
            props.class = classes.join(' ');
        }

        return {
            ...element,
            props,
        }
    });
}

function isStringNumberLiteral(expr: JSX.Children) {
    return typeof expr === 'string' && /^\d$/.test(expr[0]);
}

function isPrimitiveType(expr: JSX.Children) {
    const primitives = [
        'boolean',
        'number',
        'string',
        'symbol',
        'unknown',
        'any',
        'void',
        'null',
        'undefined',
        'never',
        'object',
        'unique symbol',
    ];

    return typeof expr === 'string' && primitives.includes(expr);
}
