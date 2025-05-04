import {
  ContainerReflection,
  JSX,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

import { OxideContextBase } from '../base.js';

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
            {this.__navigation_items(model)}
          </div>
        </>
      );
    };

    private __navigation_modules(model: Reflection) {
      const parent = model.parent;
      if (typeof parent === 'undefined') {
        return;
      }

      let modules: Reflection[] = [];
      if (parent instanceof ContainerReflection) {
        modules = parent.getChildrenByKind(ReflectionKind.SomeModule);
      }
      if (modules.length === 0) {
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

    private __navigation_items(model: Reflection) {
      let blocks: JSX.Element[] = [];

      if (model instanceof ContainerReflection) {
        if (model.categories?.length) {
          blocks = model.categories.map((x) => this.__navigation_category(x));
        } else if (model.groups?.length) {
          blocks = model.groups.flatMap((group) => {
            if (group.categories) {
              return group.categories.map((x) => this.__navigation_category(x));
            }

            return [this.__navigation_category(group)];
          });
        }
      }

      return blocks.length > 0 && <section>{blocks}</section>;
    }

    private __navigation_category(category: ReflectionCategory | ReflectionGroup) {
      return (
        <div class="block">
          <h3>
            <a href="#">{category.title}</a>
          </h3>
          <ul>
            {category.children.map((child) => (
              <li class={this.getReflectionClasses(child)}>
                <a href={this.urlTo(child)}>
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

function isCurrentModule(module: Reflection, current: Reflection) {
  return module.id === current.id || module.id === current.parent?.id;
}
