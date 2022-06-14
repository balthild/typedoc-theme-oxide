import {
    ContainerReflection, DefaultThemeRenderContext, JSX, ProjectReflection, ReflectionCategory,
    ReflectionGroup,
} from 'typedoc';

export const navigation: Template<JSX.Element> = (context, page) => {
    const { project, model } = page;

    return (
        <>
            <h2 class="location">
                <a href="#">{project.name}</a>
            </h2>

            <div class="sidebar-elems">
                {/* TODO: primary navigation */}
                <div class="block">
                    <ul>
                        <li class="version">Version {project.packageInfo.version}</li>
                        <li><a id="all-types" href={context.relativeURL('modules.html')}>Exports</a></li>
                    </ul>
                </div>

                {itemsNavigation(context, page)}

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

const itemsNavigation: Template<JSX.Element> = (context, page) => {
    const { model } = page;

    const blocks: JSX.Element[] = [];
    if (model instanceof ContainerReflection || model instanceof ProjectReflection) {
        if (model.categories?.length) {
            for (const category of model.categories) {
                blocks.push(renderCategory(context, category));
            }
        } else if (model.groups?.length) {
            for (const group of model.groups) {
                if (group.categories) {
                    for (const category of group.categories) {
                        blocks.push(renderCategory(context, category));
                    }
                } else {
                    blocks.push(renderCategory(context, group));
                }
            }
        }
    }

    return (
        <section>{blocks}</section>
    );
}

function renderCategory(context: DefaultThemeRenderContext, category: ReflectionCategory | ReflectionGroup) {
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
