import { createSearchDocument } from '../lib';

declare namespace globalThis {
  const translations: Record<string, string>;
}

export async function loadDeflateData<T>(base64: string) {
  const binary = atob(base64);
  const blob = new Blob([Uint8Array.from(binary, (c) => c.charCodeAt(0))]);
  const stream = blob.stream().pipeThrough(new DecompressionStream('deflate'));
  return await new Response(stream).json() as T;
}

export async function loadSearchIndex() {
  const index = createSearchDocument();

  const base = `${document.documentElement.dataset.base}assets/oxide/search`;
  const parts = await (await fetch(`${base}/index.json`)).json();
  for (const part of parts) {
    const data = await (await fetch(`${base}/${part}`)).json();
    index.import(part, data);
  }

  return index;
}

export function getReflectionKindName(kind: number) {
  return globalThis.translations[`kind_${kind}`];
}
