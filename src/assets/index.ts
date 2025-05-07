import './style.css';

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { throttle } from 'lodash-es';
import { ReflectionKind } from 'typedoc/models';

import { SearchIndex, SearchItem } from '../lib/types';
import { getReflectionKindName, loadSearchIndex } from './data';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('rustdoc-search .search-form') as HTMLFormElement;
  const input = document.querySelector('rustdoc-search .search-input') as HTMLInputElement;
  const results = document.querySelector('oxide-search-results#search') as OxideSearchResults;

  const main = document.getElementById('main-content')!;
  const alt = document.getElementById('alternative-display')!;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  const index = await loadSearchIndex();
  console.log(index);

  input.addEventListener(
    'input',
    throttle(async (event) => {
      const text = event.target.value?.trim();

      const [hide, show] = text ? [main, alt] : [alt, main];
      hide.classList.add('hidden');
      show.classList.remove('hidden');

      results.items = await performSearch(text, index);
    }, 300),
  );
});

async function performSearch(query: string, index: SearchIndex) {
  if (!query.length) {
    return [];
  }

  const items = await index.search({
    query,
    enrich: true,
    merge: true,
  });

  console.log(items);

  return items.map((x) => x.doc).filter((x) => x !== null);
}

@customElement('oxide-search-results')
class OxideSearchResults extends LitElement {
  static base = document.documentElement.dataset.base;

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
  accessor items: SearchItem[] = [];

  createRenderRoot() {
    // Disable Shadow DOM.
    return this;
  }

  render() {
    const items = this.items.map((item) => {
      const trace = map(
        item.parent?.split('.').filter((x) => x) ?? [],
        (name) => html`<span class="parent">${name}.</span>`,
      );

      const classname = OxideSearchResults.classes[item.kind] ?? 'mod';

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
          <!--
          <br />
          Try on <a href="https://duckduckgo.com/?q=rust%20result%3A%3Aok">DuckDuckGo</a>?
          <br />
          <br />
          Or try looking in one of these:
          <ul>
            <li>The <a href="https://doc.rust-lang.org/1.86.0/reference/index.html">Rust Reference</a> for technical
              details about the language.</li>
          </ul>
          -->
        </div>
      </div>
    `;
  }
}
