import { OxideContextBase } from './base.js';
import { CommentMixin } from './mixins/comment.js';
import { ContainerMixin } from './mixins/container.js';
import { LayoutMixin } from './mixins/layout.js';
import { MembersMixin } from './mixins/members.js';
import { NavigationMixin } from './mixins/navigation.js';
import { ProjectMixin } from './mixins/project.js';

const mixins = [
  LayoutMixin,

  // Pages
  ProjectMixin,
  ContainerMixin,

  // Partials
  NavigationMixin,
  CommentMixin,
  MembersMixin,
];

let OxideContext = OxideContextBase;
for (const mixin of mixins) {
  OxideContext = mixin(OxideContext) as any;
}

export { OxideContext };
