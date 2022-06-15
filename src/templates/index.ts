import { JSX } from 'typedoc';

import { OxideThemeRenderContext as Context } from '../OxideThemeRenderContext';

export { layout } from './layout';

export { project } from './pages/project';
export { container } from './pages/container';

export { navigation } from './partials/navigation';
export { members } from './partials/members';
export { comment } from './partials/comment';
export { subitems } from './partials/subitems';

export function bindContext<M>(template: Template<JSX.Element, M>, context: Context) {
    return (model: M) => template(context, model);
}
