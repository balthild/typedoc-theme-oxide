import {
  ContainerReflection,
  JSX,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

import { OxideContextBase } from '../base';
import { isNestedTable, partition, ReflectionWithLink } from '../utils';

export const NavigationMixin = (base: typeof OxideContextBase) =>
  class extends base {
    navigation = (page: PageEvent<Reflection>) => {
      const { model } = page;

      return (
        <>
          <div class="sidebar-elems">
            <ul class="block">
              <li>
                <a href={this.urlTo(model.project)}>Exports</a>
              </li>
            </ul>

            {this.#modules(model)}
            {this.#sections(model)}
          </div>
        </>
      );
    };

    #modules(model: Reflection) {
      const parent = model.parent;
      const modules = parent instanceof ContainerReflection
        ? parent.getChildrenByKind(ReflectionKind.SomeModule)
        : [];

      if (!parent || modules.length === 0) {
        return;
      }

      return (
        <section>
          <ul class="block">
            <li>
              <a href={this.urlTo(parent)}>{' . .'}</a>
            </li>

            {modules.map((module) => (
              <li>
                <a
                  href={this.urlTo(module)}
                  class={isCurrentModule(module, model) ? 'current' : ''}>
                  {module.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      );
    }

    #sections(model: Reflection) {
      if (model instanceof ContainerReflection === false) {
        return;
      }

      const [tables1, categories] = partition(model.categories ?? [], isNestedTable);
      const [tables2, groups] = partition(model.groups ?? [], isNestedTable);

      const [modules, tables] = partition(
        [...tables1, ...tables2],
        (x) => x.children.every((x) => x.kindOf(ReflectionKind.ExportContainer)),
      );

      return [
        modules.map((x) => this.#table(x, true)),
        categories.map((x) => this.#category(x)),
        groups.map((x) => this.#group(x)),
        tables.map((x) => this.#table(x, true)),
      ];
    }

    #category(category: ReflectionCategory) {
      return this.#table(category, false);
    }

    #group(group: ReflectionGroup) {
      if (group.categories) {
        return group.categories.map((x) => this.#category(x));
      }

      return this.#table(group, false);
    }

    #table(table: ReflectionCategory | ReflectionGroup, nested: boolean) {
      const anchor = this.sectionSlug(table);

      return (
        <>
          <h3>
            <a href={`#${anchor}`}>{table.title}</a>
          </h3>
          <ul class="block">
            {table.children.map((x) => this.#item(x, nested))}
          </ul>
        </>
      );
    }

    #item(item: ReflectionWithLink, forceNested: boolean) {
      return (
        <li class={this.getReflectionClasses(item)}>
          <a href={this.itemLink(item, forceNested)}>{item.name}</a>
        </li>
      );
    }
  };

function isCurrentModule(module: Reflection, current: Reflection) {
  return module.id === current.id || module.id === current.parent?.id;
}
