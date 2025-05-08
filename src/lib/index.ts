import { Charset, Document, Encoder } from 'flexsearch';

import { SearchItem } from './types';

export function createSearchDocument() {
  return new Document<SearchItem>({
    document: {
      id: 'id',
      store: true,
      index: [
        {
          field: 'name',
          tokenize: 'bidirectional',
          priority: 9,
          encoder: new Encoder(Charset.LatinBalance).assign({
            normalize(text) {
              // split the names in camel case
              let pieces = text.replace(/\d+/g, '').split(/(?<=[a-z])(?=[A-Z])/);
              if (pieces.length > 1) {
                pieces.push(text);
              }
              return pieces.map((x) => x.toLowerCase()).join(' ');
            },
          }),
        },
        {
          field: 'comment',
          tokenize: 'default',
          encoder: Charset.LatinSoundex,
        },
      ],
      tag: [],
    },
  });
}
