import { JSX, Reflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base.js';

export const CommentMixin = (base: typeof OxideContextBase) =>
  class extends base {
    commentTags = (model: Reflection) => {
      if (!model.comment) {
        return;
      }

      const skippedTags = this.options.getValue('notRenderedTags');
      const tags = model.kindOf(ReflectionKind.SomeSignature)
        ? model.comment.blockTags.filter(
          (tag) => tag.tag !== '@returns' && !tag.skipRendering && !skippedTags.includes(tag.tag),
        )
        : model.comment.blockTags.filter(
          (tag) => !tag.skipRendering && !skippedTags.includes(tag.tag),
        );

      const skipSave = model.comment.blockTags.map((tag) => tag.skipRendering);
      skipSave.forEach((skip, i) => (model.comment!.blockTags[i].skipRendering = skip));

      return (
        <>
          {this.hook('comment.beforeTags', this, model.comment, model)}

          <div class="item-table">
            {tags.map((tag) => (
              <div class="item-row">
                <div class="item-left module-item">
                  <span class="stab portability" title={tag.name}>
                    <code>{tag.name}</code>
                  </span>
                </div>
                <div class="item-right">
                  <JSX.Raw html={this.markdown(tag.content)} />
                </div>
              </div>
            ))}
          </div>

          {this.hook('comment.afterTags', this, model.comment, model)}
        </>
      );
    };
  };
