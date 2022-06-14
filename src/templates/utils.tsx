import * as cheerio from 'cheerio';
import { DeclarationReflection, JSX, ReflectionKind } from 'typedoc';

export function itemTypeLinkClass(item: DeclarationReflection): string {
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
