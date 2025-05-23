import * as cheerio from 'cheerio';
import slug from 'slug';
import {
  BaseRouter,
  DeclarationReflection,
  DefaultThemeRenderContext,
  DocumentReflection,
  JSX,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  Router,
} from 'typedoc';

export type ReflectionSection = ReflectionGroup | ReflectionCategory;
export type ReflectionWithLink = DeclarationReflection | DocumentReflection;
export type URLFactory = Router | DefaultThemeRenderContext;

export function isNestedTable(section: ReflectionSection) {
  return section.children.every(isNestedItem);
}

export function isNestedItem(item: ReflectionWithLink) {
  return item.kindOf([
    ReflectionKind.ExportContainer,
    ReflectionKind.Interface,
    ReflectionKind.Class,
    ReflectionKind.Enum,
  ]);
}

export function transformElement(
  children: JSX.Children,
  transformer: (_: JSX.Element) => JSX.Element,
): JSX.Children {
  if (Array.isArray(children)) {
    return children.map((x) => transformElement(x, transformer));
  }

  if (typeof children !== 'object' || children === null) {
    return children;
  }

  return {
    ...transformer(children),
    children: children.children.map((x) => transformElement(x, transformer)),
  };
}

export function transformTypography(html: string): string {
  const $ = cheerio.load(html, null, false);

  $('h1').each((_, el) => {
    $(el).wrapInner('<h2></h2>').children(':first-child').unwrap();
  });

  $('a').find('>h1, >h2, >h3, >h4, >h5, >h6').each((_, el) => {
    const $heading = $(el);
    const $outerAnchor = $heading.parent();
    const $innerAnchor = $('<a></a>');

    $outerAnchor.after($heading);
    $outerAnchor.remove();

    $innerAnchor.attr('href', $outerAnchor.attr('href'));
    $innerAnchor.append($heading.contents());

    $heading.attr('id', $outerAnchor.attr('id'));
    $heading.append($innerAnchor);
  });

  return $.html();
}

export function join(joiner: JSX.Children, list: readonly JSX.Children[]) {
  const result = [];

  for (const item of list) {
    if (result.length > 0) {
      result.push(joiner);
    }
    result.push(item);
  }

  return result;
}

export function breakable(str: string) {
  const sep = /([^0-9A-Za-z]+|[0-9]+|(?<=[a-z])(?=[A-Z]))/;
  const pieces = str.split(sep).filter((x) => x.length);
  return join(<wbr />, pieces);
}

export function partition<T>(items: T[], predicate: (_: T) => boolean): [T[], T[]] {
  const satisfied = [];
  const unsatisfied = [];

  for (const item of items) {
    if (predicate(item)) {
      satisfied.push(item);
    } else {
      unsatisfied.push(item);
    }
  }

  return [satisfied, unsatisfied];
}

export const getUrl = (factory: URLFactory, item: Reflection) => {
  if (factory instanceof DefaultThemeRenderContext) {
    return factory.urlTo(item)!;
  }

  if (factory instanceof BaseRouter) {
    return factory.getFullUrl(item);
  }

  throw new Error('Unknown URL factory type');
};

export function sectionSlug(section: ReflectionSection) {
  const title = slug(section.title);
  return `section.${title}`;
}

export function itemSlug(item: ReflectionWithLink) {
  const kind = ReflectionKind.classString(item.kind).replace('tsd-kind-', '');
  const name = slug(item.name);
  return `${kind}.${name}`;
}

export function itemLink(factory: URLFactory, item: ReflectionWithLink, forceNested: boolean) {
  if (forceNested || !item.parent || isNestedItem(item)) {
    return getUrl(factory, item);
  }

  const url = getUrl(factory, item.parent);
  const anchor = itemSlug(item);
  if (typeof url !== 'undefined') {
    return `${url}#${anchor}`;
  }

  return getUrl(factory, item);
}
