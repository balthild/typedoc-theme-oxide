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
              let words = text.replace(/\d+/g, ' ').split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/);
              if (words.length > 1) {
                words.push(text);
              }
              return words.join(' ').toLowerCase();
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
