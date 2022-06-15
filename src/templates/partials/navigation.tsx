import {
    ContainerReflection, DefaultThemeRenderContext as Context, JSX, Reflection, ReflectionCategory,
    ReflectionGroup, ReflectionKind,
} from 'typedoc';

export const navigation: Template<JSX.Element> = (context, page) => {
    const { project, model } = page;

    const modules = model.project.getChildrenByKind(ReflectionKind.SomeModule);
    const projectLinkName = modules.length !== 0 ? "Modules" : "Exports";

    return (
        <>
            <h2 class="location">
                <a href="#">{project.name}</a>
            </h2>

            <div class="sidebar-elems">
                <div class="block">
                    <ul>
                        <li class="version">Version {project.packageInfo.version}</li>
                        <li style="margin-top: 0.7rem">
                            <a href={context.urlTo(model.project)}>{projectLinkName}</a>
                        </li>
                    </ul>
                </div>

                {renderItemsNavigation(context, model)}

                {/*
                <div class="others">
                    <div class="block crate">
                        <h3>Crates</h3>
                        <ul>
                            <li><a href="../alloc/index.html" class="crate">alloc</a></li>
                            <li><a href="../core/index.html" class="crate">core</a></li>
                            <li><a href="../proc_macro/index.html" class="crate current">proc_macro</a></li>
                            <li><a href="../std/index.html" class="crate">std</a></li>
                            <li><a href="../test/index.html" class="crate">test</a></li>
                        </ul>
                    </div>
                </div>
                */}
            </div>
        </>
    );
}

function renderItemsNavigation(context: Context, model: Reflection) {
    let blocks: JSX.Element[] = [];

    if (model instanceof ContainerReflection) {
        if (model.categories?.length) {
            blocks = model.categories.map((x) => renderCategory(context, x));
        } else if (model.groups?.length) {
            blocks = model.groups.flatMap((group) => {
                if (group.categories) {
                    return group.categories.map((x) => renderCategory(context, x));
                }
                return [renderCategory(context, group)];
            });
        }
    }

    return blocks.length > 0 && (
        <section>{blocks}</section>
    );
}

function renderCategory(context: Context, category: ReflectionCategory | ReflectionGroup) {
    return (
        <div class="block">
            <h3><a href="#">{category.title}</a></h3>
            <ul>
                {category.children.map((child) => {
                    return (
                        <li class={child.cssClasses}>
                            <a href={context.urlTo(child)}>
                                {child.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
