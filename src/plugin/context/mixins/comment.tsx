import { JSX, Reflection, ReflectionKind } from 'typedoc';

import { OxideContextBase } from '../base';

export const CommentMixin = (base: typeof OxideContextBase) =>
  class extends base {
    commentTags = (model: Reflection) => {
      if (!model.comment) {
        return;
      }

      const skipped = this.options.getValue('notRenderedTags');
      if (model.kindOf(ReflectionKind.SomeSignature)) {
        skipped.push('@returns');
      }

      const tags = model.comment.blockTags
        .filter((tag) => !tag.skipRendering)
        .filter((tag) => !skipped.includes(tag.tag));

      return (
        <>
          {this.hook('comment.beforeTags', this, model.comment, model)}

          <div class="item-table comment-tags">
            {tags.map((tag) => (
              <>
                <dt>
                  <span class="stab" title={tag.name}>{tag.name ?? tag.tag.replace('@', '')}</span>
                </dt>
                <dd>
                  <JSX.Raw html={this.markdown(tag.content)} />
                </dd>
              </>
            ))}
          </div>

          {this.hook('comment.afterTags', this, model.comment, model)}
        </>
      );
    };
  };
