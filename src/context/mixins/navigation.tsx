import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  JSX,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

import { OxideContextBase } from '../base.js';
import { isNestedTable, partition } from '../utils.js';

export const NavigationMixin = (base: typeof OxideContextBase) =>
  class extends base {
    navigation = (page: PageEvent<Reflection>) => {
      const { project, model } = page;

      return (
        <>
          <h2 class="location">
            <a href="#">{project.name}</a>
          </h2>

          <div class="sidebar-elems">
            <div class="block">
              <ul>
                <li class="version">Version {project.packageVersion}</li>
                <li style="margin-top: 0.7rem">
                  <a href={this.urlTo(model.project)}>Exports</a>
                </li>
              </ul>
            </div>

            {this.__navigation_modules(model)}
            {this.__navigation_sections(model)}
          </div>
        </>
      );
    };

    private __navigation_modules(model: Reflection) {
      const parent = model.parent;
      const modules = parent instanceof ContainerReflection
        ? parent.getChildrenByKind(ReflectionKind.SomeModule)
        : [];

      if (!parent || modules.length === 0) {
        return;
      }

      return (
        <section>
          <div class="block">
            <ul>
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
          </div>
        </section>
      );
    }

    private __navigation_sections(model: Reflection) {
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
        modules.map((x) => this.__navigation_table(x, true)),
        categories.map((x) => this.__navigation_category(x)),
        groups.map((x) => this.__navigation_group(x)),
        tables.map((x) => this.__navigation_table(x, true)),
      ];
    }

    private __navigation_category(category: ReflectionCategory) {
      return this.__navigation_table(category, false);
    }

    private __navigation_group(group: ReflectionGroup) {
      if (group.categories) {
        return group.categories.map((x) => this.__navigation_category(x));
      }

      return this.__navigation_table(group, false);
    }

    private __navigation_table(table: ReflectionCategory | ReflectionGroup, nested: boolean) {
      const anchor = this.sectionSlug(table);

      return (
        <div class="block">
          <h3>
            <a href={`#${anchor}`}>{table.title}</a>
          </h3>
          <ul>
            {table.children.map((x) => this.__navigation_item(x, nested))}
          </ul>
        </div>
      );
    }

    private __navigation_item(item: DeclarationReflection | DocumentReflection, nested: boolean) {
      return (
        <li class={this.getReflectionClasses(item)}>
          <a href={this.itemLink(item, nested)}>{item.name}</a>
        </li>
      );
    }
  };

function isCurrentModule(module: Reflection, current: Reflection) {
  return module.id === current.id || module.id === current.parent?.id;
}
