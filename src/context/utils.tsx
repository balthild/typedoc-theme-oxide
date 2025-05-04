import * as cheerio from 'cheerio';
import { DeclarationReflection, DocumentReflection, JSX, ReflectionKind } from 'typedoc';

export function itemTypeLinkClass(item: DeclarationReflection | DocumentReflection): string {
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
  const result: JSX.Children = [];

  for (const item of list) {
    if (result.length > 0) {
      result.push(joiner);
    }
    result.push(item);
  }

  return <>{result}</>;
}

/**
 * Insert word break tags ``<wbr>`` into the given string.
 *
 * Breaks the given string at ``_``, ``-`` and capital letters.
 *
 * @param str The string that should be split.
 * @return The original string containing ``<wbr>`` tags where possible.
 */
export function wbr(str: string): (string | JSX.Element)[] {
  // TODO: surely there is a better way to do this, but I'm tired.
  const ret: (string | JSX.Element)[] = [];
  const re = /[\s\S]*?(?:([^_-][_-])(?=[^_-])|([^A-Z])(?=[A-Z][^A-Z]))/g;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = re.exec(str))) {
    ret.push(match[0]);
    ret.push(<wbr />);
    i += match[0].length;
  }
  ret.push(str.slice(i));

  return ret;
}
