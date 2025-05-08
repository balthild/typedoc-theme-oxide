import { ReflectionKind } from 'typedoc/models';
import { createSearchDocument } from '../lib';

export async function loadDeflateData<T = any>(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const stream = blob.stream().pipeThrough(new DecompressionStream('deflate'));
  return await new Response(stream).json() as T;
}

export async function loadSearchIndex() {
  const index = createSearchDocument();

  const base = `${document.documentElement.dataset.base}assets/oxide`;
  const parts = await loadDeflateData(`${base}/search-index.defalte`);
  for (const [key, data] of Object.entries(parts)) {
    index.import(key, data as any);
  }

  return index;
}

export function getReflectionKindName(kind: ReflectionKind) {
  return ReflectionKind.classString(kind)
    .replace('tsd-kind-', '')
    .replace('-', ' ');
}
