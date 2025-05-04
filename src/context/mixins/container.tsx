import { ContainerReflection, DeclarationReflection, JSX, PageEvent, Reflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base.js';
import { itemTypeLinkClass } from '../utils.js';

export const ContainerMixin = (base: typeof OxideContextBase) =>
  class extends base {
    reflectionTemplate = (page: PageEvent<ContainerReflection>) => {
      const { model } = page;

      // Workaround for types.d.ts not working
      const onclick = {
        onclick: 'copy_path(this)',
      };

      return (
        <>
          <div class="main-heading">
            <h1 class="fqn">
              <span class="in-band">
                {ReflectionKind.singularString(model.kind)} {this.__container_breadcrumb(model)}

                <button id="copy-path" title="Copy item path to clipboard" {...onclick}>
                  <img
                    src={this.asset('images/clipboard.svg')}
                    width={19}
                    height={18}
                    alt="Copy item path"
                  />
                </button>
              </span>
            </h1>

            <span class="out-of-band">
              <a id="toggle-all-docs" href="javascript:void(0)" title="collapse all docs">
                [<span class="inner">−</span>]
              </a>
            </span>
          </div>

          {model.hasComment() && (
            <details class="rustdoc-toggle top-doc" open>
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

    private __container_breadcrumb(model?: Reflection, trailing = true): JSX.Children[] {
      if (model === undefined || (model.isProject() && !trailing)) {
        return [];
      }

      if (model.kindOf(ReflectionKind.SomeSignature)) {
        return this.__container_breadcrumb(model.parent);
      }

      const trail: JSX.Children[] = [];
      if (trailing) {
        const className = itemTypeLinkClass(model as DeclarationReflection);
        trail.push(<a href="#" class={className}>{model.name}</a>);
      } else {
        trail.push(<a href={this.urlTo(model)}>{model.name}</a>);
        trail.push('.');
        trail.push(<wbr />);
      }

      return this.__container_breadcrumb(model.parent, false).concat(trail);
    }
  };
