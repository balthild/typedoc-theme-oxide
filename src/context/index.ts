import { OxideContextBase } from './base';
import { CommentMixin } from './mixins/comment';
import { ContainerMixin } from './mixins/container';
import { LayoutMixin } from './mixins/layout';
import { MembersMixin } from './mixins/members';
import { NavigationMixin } from './mixins/navigation';
import { ProjectMixin } from './mixins/project';

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
