import { Charset, Document } from 'flexsearch';

import { SearchIndex } from './types';

export function createSearchDocument() {
  return new Document({
    document: {
      id: 'id',
      store: true,
      index: [
        {
          field: 'name',
          tokenize: 'forward',
          encoder: Charset.LatinBalance,
          priority: 9,
        },
        {
          field: 'comment',
          tokenize: 'forward',
          encoder: Charset.LatinBalance,
        },
      ],
      tag: [],
    },
  }) as SearchIndex;
}
