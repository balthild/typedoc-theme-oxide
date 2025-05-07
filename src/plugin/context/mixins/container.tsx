import { ContainerReflection, DeclarationReflection, JSX, PageEvent, Reflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base';

export const ContainerMixin = (base: typeof OxideContextBase) =>
  class extends base {
    reflectionTemplate = (page: PageEvent<ContainerReflection>) => {
      const { model } = page;

      return (
        <>
          <div class="main-heading">
            <div class="rustdoc-breadcrumbs">
              {this.__container_breadcrumb(page.model.parent)}
            </div>
            <h1>
              {ReflectionKind.singularString(model.kind)} <span>{model.name}</span>
              <button id="copy-path" title="Copy item path to clipboard">Copy item path</button>
            </h1>
            <rustdoc-toolbar />
          </div>

          {model.hasComment() && (
            <details class="toggle top-doc" open>
              <summary class="hideme">
                <span>Expand description</span>
              </summary>
              <div class="docblock">
                {this.commentSummary(model)}
                {this.commentTags(model)}
              </div>
            </details>
          )}

          {this.members(model)}
        </>
      );
    };

    private __container_breadcrumb(model?: Reflection, last = true): JSX.Children[] {
      if (!model || model.isProject()) {
        return [];
      }

      if (model.kindOf(ReflectionKind.SomeSignature)) {
        return this.__container_breadcrumb(model.parent);
      }

      const trail: JSX.Children = [<a href={this.urlTo(model)}>{model.name}</a>];
      if (!last) {
        trail.push('.');
        trail.push(<wbr />);
      }

      return this.__container_breadcrumb(model.parent, false).concat(trail);
    }
  };
