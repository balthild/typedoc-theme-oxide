import { Document } from 'flexsearch';

export interface SearchItem {
  id: number;
  name: string;
  comment: string;
  kind: number;
  parent: string;
  url: string;
}

export type SearchItemDocument = {
  [K in keyof SearchItem]: K extends keyof SearchItem ? SearchItem[K] : never;
};

export type SearchIndex = Document<SearchItemDocument, false, StorageInterface>;
