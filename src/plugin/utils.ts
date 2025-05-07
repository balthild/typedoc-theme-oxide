import { Comment } from 'typedoc';
import { ReflectionWithLink } from './context/utils';

export function renderTextComment(item: ReflectionWithLink) {
  const comments: Comment[] = [];

  if (item.comment) {
    comments.push(item.comment);
  }

  if (item.isDocument()) {
    comments.push(new Comment(item.content));
  }

  if (item.isDeclaration()) {
    const signatures = [
      ...item.signatures ?? [],
      item.getSignature,
      item.setSignature,
    ];

    for (const signature of signatures) {
      if (signature?.comment) {
        comments.push(signature.comment);
      }
    }
  }

  if (!comments.length) {
    return '';
  }

  return comments
    .flatMap((comment) => {
      return [
        ...comment.summary,
        ...comment.blockTags.flatMap((tag) => tag.content),
      ];
    })
    .map((part) => part.text)
    .join('\n');
}
