import { JSX, PageEvent, ProjectReflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base';

export const ProjectMixin = (base: typeof OxideContextBase) =>
  class extends base {
    indexTemplate = (page: PageEvent<ProjectReflection>) => {
      const { model, project } = page;

      return (
        <>
          <div class="main-heading">
            <h1>
              {ReflectionKind.singularString(model.kind)} <span>{project.name}</span>
              <button id="copy-path" title="Copy item path to clipboard">Copy item path</button>
            </h1>
            <rustdoc-toolbar />
          </div>

          <details class="toggle top-doc" open>
            <summary class="hideme">
              <span>Expand description</span>
            </summary>
            <div class="docblock">
              <JSX.Raw html={this.markdown(page.model.readme)} />
            </div>
          </details>

          {this.members(model)}
        </>
      );
    };
  };
