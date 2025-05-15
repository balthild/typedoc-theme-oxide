import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  JSX,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  SignatureReflection,
  TypeParameterReflection,
} from 'typedoc';

import { OxideContextBase } from '../base';
import {
  breakable,
  isNestedTable,
  join,
  partition,
  ReflectionSection,
  ReflectionWithLink,
  transformElement,
} from '../utils';

export const MembersMixin = (base: typeof OxideContextBase) =>
  class extends base {
    members = (model: ContainerReflection) => {
      const [nested1, categories] = partition(model.categories ?? [], isNestedTable);
      const [nested2, groups] = partition(model.groups ?? [], isNestedTable);

      const [modules, tables] = partition(
        [...nested1, ...nested2],
        (x) => x.children.every((x) => x.kindOf(ReflectionKind.ExportContainer)),
      );

      const sections = [
        ...categories,
        ...groups.flatMap((x) => x.categories ?? [x] as ReflectionSection[]),
      ];

      return (
        <>
          {this.#preview(model)}
          {modules.map((x) => this.#table(x, true))}
          {sections.map((x) => this.#section(x))}
          {tables.map((x) => this.#table(x, true))}
        </>
      );
    };

    #preview(model: ContainerReflection) {
      // Workaround for `this.reflectionPreview`
      if (model.isDeclaration() && model.indexSignatures) {
        model.children ??= [];
      }

      const preview = this.reflectionPreview(model);
      if (!preview) {
        return;
      }

      return <pre class="item-decl"><code>{removeLinks(transformTokens(preview))}</code></pre>;
    }

    #table = (section: ReflectionSection, forceNested: boolean) => {
      const anchor = this.sectionSlug(section);

      return (
        <>
          <h2 id={anchor} class="section-header">
            {section.title}
            <a href={`#${anchor}`} class="anchor">§</a>
          </h2>

          <dl class="item-table">
            {section.children.map((item) => (
              <>
                <dt>
                  <a
                    class={itemTypeLinkClass(item)}
                    href={this.itemLink(item, forceNested)}
                    title={item.name}>
                    {item.name}
                  </a>
                </dt>

                <dd>
                  <JSX.Raw html={this.markdown(item.comment?.getShortSummary(true))} />
                </dd>
              </>
            ))}
          </dl>
        </>
      );
    };

    #section(section: ReflectionSection) {
      const anchor = this.sectionSlug(section);
      const variants = section.children.every((x) => x.kindOf(ReflectionKind.EnumMember));

      return (
        <>
          <h2 id={anchor} class="section-header">
            {section.title}
            <a href={`#${anchor}`} class="anchor">§</a>
          </h2>

          <div class={variants ? 'variants' : 'impl-items'}>
            {section.children.map((item) => this.#item(item))}
          </div>
        </>
      );
    }

    #item(item: ReflectionWithLink) {
      if (item instanceof DocumentReflection) {
        return this.#doc(item);
      }

      if (item.kindOf(ReflectionKind.EnumMember)) {
        return this.#variant(item);
      }

      return this.#decl(item);
    }

    #doc(doc: DocumentReflection) {
      console.log('DocumentReflection', doc.getFullName());
      debugger;
    }

    #variant(decl: DeclarationReflection) {
      const anchor = this.itemSlug(decl);

      return (
        <>
          <section id={anchor} class="variant">
            <a href={`#${anchor}`} class="anchor">§</a>
            <h3 class="code-header">{decl.name} = {transformTokens(this.type(decl.type))}</h3>
          </section>

          <div class="docblock">
            {this.commentSummary(decl)}
            {this.commentTags(decl)}
          </div>
        </>
      );
    }

    #decl(decl: DeclarationReflection) {
      const anchor = this.itemSlug(decl);

      if (decl.signatures?.length) {
        // methods
        return decl.signatures?.map((x, i) =>
          i === 0
            ? this.#signature(x, anchor)
            : this.#signature(x, `${anchor}-${i}`)
        );
      }

      if (decl.hasGetterOrSetter()) {
        // accessors
        const signatures = [decl.getSignature, decl.setSignature].filter((x) => x != undefined);
        return signatures.map((x, i) =>
          i === 0
            ? this.#signature(x, anchor)
            : this.#signature(x, `${anchor}-${i}`)
        );
      }

      // type aliases, variables, fields
      return this.#detail(decl, anchor);
    }

    #signature(signature: SignatureReflection, anchor: string) {
      return (
        <details class="toggle method-toggle" open>
          <summary>
            <section id={anchor} class="method trait-impl">
              {this.#source(signature)}
              <a href={anchor && `#${anchor}`} class="anchor">§</a>

              <h4 class="code-header">
                {transformTokens(this.memberSignatureTitle(signature))}
              </h4>
            </section>
          </summary>

          <div class="docblock">
            {this.commentSummary(signature)}
            {this.commentTags(signature)}
          </div>
        </details>
      );
    }

    #detail(decl: DeclarationReflection, anchor: string) {
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
        <details class="toggle method-toggle" open>
          <summary>
            <section id={anchor} class="method trait-impl">
              {this.#source(decl)}
              <a href={`#${anchor}`} class="anchor">§</a>

              <h4 class="code-header">
                {this.#modifier(decl)}

                {breakable(decl.name)}
                {transformTokens(this.#generics(decl.typeParameters))}

                {decl.type && [
                  delimeter,
                  transformTokens(this.type(decl.type)),
                ]}

                {!decl.type && (decl.groups || decl.categories) && [
                  delimeter,
                  <a href={this.urlTo(decl)}>{decl.name}</a>,
                ]}

                {value && ` = ${value}`}
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

    #modifier(decl: DeclarationReflection) {
      let modifier = [];

      if (decl.kindOf(ReflectionKind.SomeType)) {
        modifier.push('type');
      } else if (decl.kindOf(ReflectionKind.SomeValue)) {
        modifier.push(decl.flags.isConst ? 'const' : 'let');
      } else if (decl.kindOf(ReflectionKind.ClassMember)) {
        if (decl.flags.isPrivate) {
          modifier.push('private');
        }
        if (decl.flags.isProtected) {
          modifier.push('protected');
        }
        if (decl.flags.isPublic) {
          modifier.push('public');
        }
        if (decl.flags.isAbstract) {
          modifier.push('abstract');
        }
        if (decl.flags.isStatic) {
          modifier.push('static');
        }
        if (decl.flags.isReadonly) {
          modifier.push('readonly');
        }
      }

      if (!modifier.length) {
        return;
      }

      return <span class="struct">{modifier.join(' ')}{' '}</span>;
    }

    #source(decl: DeclarationReflection | SignatureReflection) {
      const url = this.itemSourceLink(decl);
      if (!url) {
        return;
      }

      return (
        <span class="rightside">
          <a class="src" href={url}>Source</a>
        </span>
      );
    }

    #generics(params?: TypeParameterReflection[]) {
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

export function itemTypeLinkClass(item: ReflectionWithLink): string {
  switch (item.kind) {
    case ReflectionKind.Module:
    case ReflectionKind.Namespace:
      return 'mod';
    case ReflectionKind.Function:
      return 'fn';
    case ReflectionKind.TypeAlias:
      return 'type';
    case ReflectionKind.Enum:
      return 'enum';
    case ReflectionKind.Class:
      return 'struct';
    case ReflectionKind.Interface:
      return 'trait';
    case ReflectionKind.Variable:
      return 'constant';
    default:
      return 'foreigntype';
  }
}

function removeLinks(children: JSX.Children) {
  return transformElement(children, (element) => {
    if (element.tag === 'a') {
      element.tag = 'span';
      if (element.props) {
        // @ts-ignore
        delete element.props.href;
      }
    }

    return element;
  });
}

function transformTokens(children: JSX.Children) {
  return transformElement(children, (element) => {
    const props = {
      'class': undefined as string | undefined,
      'href': undefined as string | undefined,
      'data-tsd-kind': undefined as string | undefined,
      ...element.props,
    };

    const classes = props.class?.trim().split(/\s+/) ?? [];
    if (classes.includes('tsd-signature-type')) {
      const firstChild = element.children[0];
      if (isStringNumberLiteral(firstChild)) {
        classes.push('macro');
      } else if (isPrimitiveType(firstChild)) {
        classes.push('primitive');
      } else if (props['data-tsd-kind'] === 'Type Parameter' || classes.includes('tsd-kind-type-parameter')) {
        classes.push('trait');
      } else {
        classes.push('associatedtype');
      }
    }
    if (classes.includes('tsd-signature-keyword')) {
      classes.push('primitive');
    }
    if (classes.includes('tsd-kind-type-parameter')) {
      classes.push('trait');
      element.tag = 'span';
      delete props.href;
    }
    if (classes.includes('tsd-kind-call-signature')) {
      classes.push('method');
    }
    props.class = classes.join(' ');

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
