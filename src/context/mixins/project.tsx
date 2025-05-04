import { JSX, PageEvent, ProjectReflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base.js';

export const ProjectMixin = (base: typeof OxideContextBase) =>
  class extends base {
    indexTemplate = (page: PageEvent<ProjectReflection>) => {
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
                {ReflectionKind.singularString(model.kind)} <a href="#" class="mod">{model.name}</a>
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

          <details class="rustdoc-toggle top-doc" open>
            <summary class="hideme">
              <span>Expand description</span>
            </summary>
            <div class="docblock">
              <JSX.Raw html={this.markdown(page.model.readme)} />
            </div>
          </details>

          {model.groups?.map((group) => {
            if (group.categories) {
              return group.categories.map((category) => this.subitems(category));
            }

            return this.subitems(group);
          })}
        </>
      );
    };
  };
