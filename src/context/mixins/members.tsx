import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  JSX,
  ReferenceReflection,
  ReflectionCategory,
  ReflectionFlag,
  ReflectionGroup,
  ReflectionKind,
  SignatureReflection,
  TypeParameterReflection,
} from 'typedoc';

import { OxideContextBase } from '../base.js';
import { join, transformElement, wbr } from '../utils.js';

export const MembersMixin = (base: typeof OxideContextBase) =>
  class extends base {
    members = (model: ContainerReflection) => {
      const isSubItem = (model: ReflectionCategory | ReflectionGroup) => {
        return model.children.every((x) => {
          return x.kindOf([
            ReflectionKind.ExportContainer,
            ReflectionKind.Interface,
            ReflectionKind.Class,
            ReflectionKind.Enum,
          ]);
        });
      };

      const categories = model.categories?.filter((x) => !isSubItem(x)) ?? [];
      const groups = model.groups?.filter((x) => !isSubItem(x)) ?? [];
      const subitems = [...model.categories ?? [], ...model.groups ?? []].filter((x) => isSubItem(x));

      return (
        <>
          {categories.map((x) => this.__members_category(x))}
          {groups.map((x) => this.__members_group(x))}
          {subitems.map((x) => this.subitems(x))}
        </>
      );
    };

    private __members_category(category: ReflectionCategory) {
      return (
        <>
          <h2 id={`category.${category.title}`} class="small-section-header">
            {category.title}
            <a href={`#category.${category.title}`} class="anchor"></a>
          </h2>

          {category.children.map((item) => this.__members_item(item))}
        </>
      );
    }

    private __members_group(group: ReflectionGroup) {
      if (group.categories?.length) {
        return <>{group.categories.map((x) => this.__members_category(x))}</>;
      }

      return (
        <>
          <h2 id={`group.${group.title}`} class="small-section-header">
            {group.title}
            <a href={`#group.${group.title}`} class="anchor"></a>
          </h2>

          {group.children.map((item) => this.__members_item(item))}
        </>
      );
    }

    private __members_item(item: DeclarationReflection | DocumentReflection) {
      if (item.variant === 'document') {
        return this.__members_doc(item);
      }

      return this.__members_decl(item);
    }

    private __members_doc(doc: DocumentReflection) {
      // TODO
      debugger;
    }

    private __members_decl(decl: DeclarationReflection) {
      const source = decl.sources?.[0].url;
      const anchor = this.router.getAnchor(decl);

      return (
        <div>
          <details class="rustdoc-toggle implementors-toggle" open>
            <summary>
              <section id={anchor} class={`impl ${source ? 'has-srclink' : ''}`}>
                {source && (
                  <span class="rightside">
                    <a class="srclink" href={source}>source</a>
                  </span>
                )}
                <a href={`#${anchor}`} class="anchor"></a>
                <h3 class="code-header in-band">
                  {decl.name}
                </h3>
              </section>
            </summary>
            <div class="impl-items">
              {this.__members_detail(decl)}
              {/* TODO: member.groups */}
            </div>
          </details>
        </div>
      );
    }

    private __members_detail(decl: DeclarationReflection) {
      if (decl.signatures?.length) {
        // methods
        return decl.signatures?.map((x) => this.__members_signature(x));
      } else if (decl.hasGetterOrSetter()) {
        // accessor fields
        return [
          decl.getSignature && this.__members_signature(decl.getSignature),
          decl.setSignature && this.__members_signature(decl.setSignature),
        ];
      } else if (decl instanceof ReferenceReflection) {
        // re-exports?
        return this.__members_reference(decl);
      } else {
        // type aliases, variables, fields and enum members
        return this.__members_other(decl);
      }
    }

    private __members_signature(decl: SignatureReflection) {
      const source = decl.sources?.[0].url;
      const anchor = this.router.getAnchor(decl);

      return (
        <details class="rustdoc-toggle method-toggle" open>
          <summary>
            <section id={anchor} class={`method ${source ? 'has-srclink' : ''}`}>
              {source && (
                <span class="rightside">
                  <a class="srclink" href={source}>source</a>
                </span>
              )}
              <a href={`#${anchor}`} class="anchor"></a>

              <h4 class="code-header">
                {transformClassName(this.memberSignatureTitle(decl))}
              </h4>
            </section>
          </summary>

          <div class="docblock">
            {this.commentSummary(decl)}
            {this.commentTags(decl)}
          </div>
        </details>
      );
    }

    private __members_reference(decl: ReferenceReflection) {
      // TODO
      debugger;
    }

    private __members_other(decl: DeclarationReflection) {
      const source = decl.sources?.[0].url;
      const anchor = this.router.getAnchor(decl);

      let prefix;
      if (decl.kindOf(ReflectionKind.SomeType)) {
        prefix = 'type ';
      } else if (decl.kindOf(ReflectionKind.SomeValue)) {
        prefix = decl.flags.hasFlag(ReflectionFlag.Const) ? 'const ' : 'let ';
      }

      let delimeter;
      if (decl.kindOf(ReflectionKind.SomeType)) {
        delimeter = ' = ';
      } else {
        delimeter = decl.flags.isOptional ? '?: ' : ': ';
      }

      let value: JSX.Children = decl.defaultValue;
      if (isStringNumberLiteral(value)) {
        value = <span class="macro">{decl.defaultValue}</span>;
      } else if (isPrimitiveType(value)) {
        value = <span class="primitive">{decl.defaultValue}</span>;
      }

      return (
        <details class="rustdoc-toggle method-toggle" open>
          <summary>
            <section id={anchor} class={`method ${source ? 'has-srclink' : ''}`}>
              {source && (
                <span class="rightside">
                  <a class="srclink" href={source}>source</a>
                </span>
              )}
              <a href={`#${anchor}`} class="anchor"></a>

              <h4 class="code-header">
                <span class="struct">{prefix}</span>

                {wbr(decl.name)}
                {transformClassName(this.__members_type_params(decl.typeParameters))}

                {decl.type && [
                  delimeter,
                  transformClassName(this.type(decl.type)),
                ]}

                {value && !decl.kindOf(ReflectionKind.EnumMember) && ` = ${value}`}
              </h4>
            </section>
          </summary>

          <div class="docblock">
            {this.commentSummary(decl)}
            {this.commentTags(decl)}
          </div>
        </details>
      );
    }

    protected __members_type_params(params?: TypeParameterReflection[]) {
      if (!params?.length) {
        return;
      }

      return (
        <>
          <span class="tsd-signature-symbol">{'<'}</span>
          {join(
            <span class="tsd-signature-symbol">{', '}</span>,
            params.map((item) => (
              <>
                {item.varianceModifier ? `${item.varianceModifier} ` : ''}
                <span
                  class="tsd-signature-type"
                  data-tsd-kind={ReflectionKind.singularString(item.kind)}>
                  {item.name}
                </span>
              </>
            )),
          )}
          <span class="tsd-signature-symbol">{'>'}</span>
        </>
      );
    }
  };

function transformClassName(children: JSX.Children) {
  return transformElement(children, (element) => {
    const props = {
      'class': undefined as string | undefined,
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
        } else if (props['data-tsd-kind'] === 'Type Parameter') {
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
    };
  });
}

function isStringNumberLiteral(expr: JSX.Children) {
  return typeof expr === 'string' && /^(\d|".+"$)/.test(expr);
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
