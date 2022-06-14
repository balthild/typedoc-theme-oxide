import { JSX, Reflection } from 'typedoc';



export const comment: Template<JSX.Element, Reflection> = (context, model) => {
    if (!model.comment?.hasVisibleComponent()) {
        return <></>;
    }

    return (
        <>
            {!!model.comment.shortText && (
                <JSX.Raw html={"\n" + context.markdown(model.comment.shortText)} />
            )}

            {!!model.comment.text && (
                <JSX.Raw html={context.markdown(model.comment.text)} />
            )}

            {!!model.comment.tags?.length && (
                <div class="item-table">
                    {model.comment.tags?.map((tag) => (
                        <div class="item-row">
                            <div class="item-left module-item">
                                <span class="stab portability" title={tag.tagName}>
                                    <code>
                                        {tag.tagName}
                                        {tag.paramName ? ` ${tag.paramName}` : ""}
                                    </code>
                                </span>
                            </div>
                            <div class="item-right">
                                <JSX.Raw html={context.markdown(tag.text)} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
