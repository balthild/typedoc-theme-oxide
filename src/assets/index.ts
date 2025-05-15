import './style.css';

import { Document } from 'flexsearch';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { throttle } from 'lodash-es';
import { ReflectionKind } from 'typedoc/models';

import { SearchItem } from '../lib/types';
import { getReflectionKindName, loadSearchIndex } from './data';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('rustdoc-search .search-form') as HTMLFormElement;
  const input = document.querySelector('rustdoc-search .search-input') as HTMLInputElement;

  const main = document.getElementById('main-content')!;
  const alt = document.getElementById('alternative-display')!;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  let index: Promise<Document<SearchItem>>;
  let controller: AbortController;

  input.addEventListener(
    'input',
    throttle(async (event) => {
      if (!index) {
        index = loadSearchIndex();
      }

      const query = event.target.value?.trim();

      const [hide, show] = query ? [main, alt] : [alt, main];
      hide.classList.add('hidden');
      show.classList.remove('hidden');

      controller?.abort();
      controller = new AbortController();
      const signal = controller.signal;

      await performSearch(query, signal, await index);
    }, 300),
  );
});

async function performSearch(query: string, signal: AbortSignal, index: Document<SearchItem>) {
  if (signal.aborted || !query.length) {
    return;
  }

  const items = await index.search({ query, enrich: true, merge: true });
  if (signal.aborted) {
    return;
  }

  const vars = document.querySelector('meta[name="rustdoc-vars"]') as HTMLMetaElement;
  const results = document.querySelector('oxide-search-results#search') as OxideSearchResults;

  results.loading = false;
  results.project = vars.dataset.currentCrate!;
  results.query = query;
  results.items = items.map((x) => x.doc).filter((x) => x !== null && x !== undefined);
}

@customElement('oxide-search-results')
class OxideSearchResults extends LitElement {
  static base = document.documentElement.dataset.base!;

  static classes = {
    [ReflectionKind.ClassMember]: 'fn',
    [ReflectionKind.Function]: 'fn',
    [ReflectionKind.Property]: 'fn',
    [ReflectionKind.Method]: 'fn',
    [ReflectionKind.CallSignature]: 'fn',
    [ReflectionKind.IndexSignature]: 'fn',
    [ReflectionKind.GetSignature]: 'fn',
    [ReflectionKind.SetSignature]: 'fn',
    [ReflectionKind.Accessor]: 'fn',
    [ReflectionKind.ConstructorSignature]: 'primitive',
    [ReflectionKind.Constructor]: 'primitive',
    [ReflectionKind.EnumMember]: 'macro',
    [ReflectionKind.Variable]: 'macro',
  } as Record<number, string>;

  @property({ attribute: false })
  accessor loading: boolean = true;

  @property({ attribute: false })
  accessor project: string = '';

  @property({ attribute: false })
  accessor query: string = '';

  @property({ attribute: false })
  accessor items: SearchItem[] = [];

  createRenderRoot() {
    // Disable Shadow DOM.
    return this;
  }

  render() {
    if (this.loading) {
      return html`
        <h3 class="search-loading">Loading search results...</h3>
      `;
    }

    const items = this.items.map((item) => {
      const classname = OxideSearchResults.classes[item.kind] ?? 'mod';
      const trace = map(
        item.parent?.split('.').filter((x) => x) ?? [],
        (name) => html`<span class="parent">${name}.</span>`,
      );

      return html`
        <a class="result-item" href="${OxideSearchResults.base}${item.url}">
          <span class="result-name">
            <span class="typename">
              ${getReflectionKindName(item.kind)}
            </span>

            <div class="path">
              ${trace}<span class="${classname}">${item.name}</span>
            </div>
          </span>
        </a>
      `;
    });

    const ddgQuery = encodeURIComponent(`${this.project} ${this.query}`);

    return html`
      <div class="main-heading">
        <h1 class="search-results-title">Results</h1>
      </div>

      <div id="results">
        <div class="search-results ${this.items.length ? 'active' : ''}">
          ${items}
        </div>

        <div class="search-failed ${this.items.length ? '' : 'active'}">
          No results :(
          <br />
          Try on <a href="https://duckduckgo.com/?q=${ddgQuery}" target="_blank">DuckDuckGo</a>?
        </div>
      </div>
    `;
  }
}
