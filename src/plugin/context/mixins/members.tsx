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

import { OxideContextBase } from '../base';
import {
  breakable,
  isNestedTable,
  itemTypeLinkClass,
  join,
  partition,
  ReflectionWithLink,
  transformElement,
} from '../utils';

export const MembersMixin = (base: typeof OxideContextBase) =>
  class extends base {
    members = (model: ContainerReflection) => {
      const [tables1, categories] = partition(model.categories ?? [], isNestedTable);
      const [tables2, groups] = partition(model.groups ?? [], isNestedTable);

      const [modules, tables] = partition(
        [...tables1, ...tables2],
        (x) => x.children.every((x) => x.kindOf(ReflectionKind.ExportContainer)),
      );

      return (
        <>
          {modules.map((x) => this.__members_table(x, true))}
          {categories.map((x) => this.__members_category(x))}
          {groups.map((x) => this.__members_group(x))}
          {tables.map((x) => this.__members_table(x, true))}
        </>
      );
    };

    private __members_category(category: ReflectionCategory) {
      return this.__members_section(category);
    }

    private __members_group(group: ReflectionGroup) {
      if (group.categories) {
        return group.categories.map((x) => this.__members_category(x));
      }

      return this.__members_section(group);
    }

    private __members_section(section: ReflectionCategory | ReflectionGroup) {
      const anchor = this.sectionSlug(section);
      const classes = {
        [ReflectionKind.Enum]: 'variants',
      } as Record<ReflectionKind, string>;

      return (
        <>
          <h2 id={anchor} class="section-header">
            {section.title}
            <a href={`#${anchor}`} class="anchor">§</a>
          </h2>

          <div class={classes[this.model.kind]}>
            {section.children.map((item) => this.__members_item(item))}
          </div>
        </>
      );
    }

    protected __members_table = (section: ReflectionCategory | ReflectionGroup, forceNested: boolean) => {
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

    private __members_item(item: ReflectionWithLink) {
      if (item instanceof DocumentReflection) {
        return this.__members_doc(item);
      }

      if (item.kindOf(ReflectionKind.EnumMember)) {
        return this.__members_enum_member(item);
      }

      return this.__members_decl(item);
    }

    private __members_doc(doc: DocumentReflection) {
      console.log('DocumentReflection', doc.getFullName());
      debugger;
    }

    private __members_enum_member(decl: DeclarationReflection) {
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

    private __members_decl(decl: DeclarationReflection) {
      const anchor = this.itemSlug(decl);
      const source = this.__members_source(decl);

      return (
        <details class="toggle implementors-toggle" open>
          <summary>
            <section id={anchor} class="impl">
              {source}
              <a href={`#${anchor}`} class="anchor">§</a>
              <h3 class="code-header">{decl.name}</h3>
            </section>
          </summary>
          <div class="impl-items">
            {this.__members_detail(decl)}
          </div>
        </details>
      );
    }

    private __members_detail(decl: DeclarationReflection) {
      if (decl.signatures?.length) {
        // methods
        return decl.signatures?.map((x) => this.__members_detailSignature(x));
      } else if (decl.hasGetterOrSetter()) {
        // accessors
        return [
          decl.getSignature && this.__members_detailSignature(decl.getSignature),
          decl.setSignature && this.__members_detailSignature(decl.setSignature),
        ];
      } else if (decl instanceof ReferenceReflection) {
        // what is this?
        return this.__members_detailReference(decl);
      } else {
        // type aliases, variables, fields
        return this.__members_detailOther(decl);
      }
    }

    private __members_detailSignature(decl: SignatureReflection) {
      const anchor = this.slugger.slug(`signature ${decl.name}`);
      const source = this.__members_source(decl);

      return (
        <details class="toggle method-toggle" open>
          <summary>
            <section id={anchor} class="method">
              {source}
              <a href={`#${anchor}`} class="anchor">§</a>

              <h4 class="code-header">
                {transformTokens(this.memberSignatureTitle(decl))}
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

    private __members_detailReference(decl: ReferenceReflection) {
      console.log('ReferenceReflection', decl.getFullName());
      debugger;
    }

    private __members_detailOther(decl: DeclarationReflection) {
      const anchor = this.slugger.slug(`declaration ${decl.name}`);
      const source = this.__members_source(decl);

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
        <details class="toggle method-toggle" open>
          <summary>
            <section id={anchor} class="method">
              {source}
              <a href={`#${anchor}`} class="anchor">§</a>

              <h4 class="code-header">
                <span class="struct">{prefix}</span>

                {breakable(decl.name)}
                {transformTokens(this.__members_type_params(decl.typeParameters))}

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

    private __members_source(decl: DeclarationReflection | SignatureReflection) {
      const url = decl.sources?.map((src) => src.url).find((url) => url);
      if (!url) {
        return;
      }

      return (
        <span class="rightside">
          <a class="src" href={url}>source</a>
        </span>
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
