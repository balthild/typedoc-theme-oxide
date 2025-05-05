declare namespace globalThis {
  const searchData: string;
  const hierarchyData: string;
  const translations: Record<string, string>;
}

export interface TypeDocData {
  search: SearchData;
  hierarchy: HierarchyData;
}

export interface SearchData {
  rows: SearchItem[];
  index: any;
}

export interface SearchItem {
  kind: number;
  name: string;
  url: string;
  classes: string;
  parent?: string;
}

export interface HierarchyData {
  roots: number[];
  reflections: Record<number, HierarchyItem>;
}

export interface HierarchyItem {
  name: string;
  kind: number;
  url: string;
  children?: number[];
  uniqueNameParents?: number[];
  class: string;
}

export async function loadDeflateData<T>(base64: string) {
  const binary = atob(base64);
  const blob = new Blob([Uint8Array.from(binary, (c) => c.charCodeAt(0))]);
  const stream = blob.stream().pipeThrough(new DecompressionStream('deflate'));
  return await new Response(stream).json() as T;
}

export async function loadData() {
  let [search, hierarchy] = await Promise.all([
    await loadDeflateData<SearchData>(globalThis.searchData),
    await loadDeflateData<HierarchyData>(globalThis.hierarchyData),
  ]);

  return { search, hierarchy } as TypeDocData;
}

export function getReflectionKindName(kind: number) {
  return globalThis.translations[`kind_${kind}`];
}
