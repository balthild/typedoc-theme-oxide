import { ContainerReflection, JSX, PageEvent, Reflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base';
import { join } from '../utils';

export const ContainerMixin = (base: typeof OxideContextBase) =>
  class extends base {
    reflectionTemplate = (page: PageEvent<ContainerReflection>) => {
      const { model } = page;

      return (
        <>
          <div class="main-heading">
            <div class="rustdoc-breadcrumbs">
              {this.__container_breadcrumbs(page.model.parent)}
            </div>

            <h1>
              {ReflectionKind.singularString(model.kind) + ' '}
              <span>{model.name}</span>
              {this.__container_generics(model)}

              <button id="copy-path" title="Copy item path to clipboard">Copy item path</button>
            </h1>

            <rustdoc-toolbar />

            {this.__container_source(model)}
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

    private __container_breadcrumbs(model?: Reflection): JSX.Children[] {
      if (!model || model.isProject()) {
        return [];
      }

      if (model.kindOf(ReflectionKind.SomeSignature)) {
        return this.__container_breadcrumbs(model.parent);
      }

      const trail = [
        ...this.__container_breadcrumbs(model.parent),
        <a href={this.urlTo(model)}>{model.name}</a>,
      ];

      return join(['.', <wbr />], trail);
    }

    private __container_generics(model: Reflection) {
      if (!model.isDeclaration() && !model.isSignature()) {
        return;
      }

      if (!model.typeParameters) {
        return;
      }

      return ['<', join(', ', model.typeParameters.map((x) => x.name)), '>'];
    }

    private __container_source(model: Reflection) {
      const url = this.itemSourceLink(model);
      if (!url) {
        return;
      }

      return (
        <span class="sub-heading">
          <a class="src" href={url}>Source</a>
        </span>
      );
    }
  };
