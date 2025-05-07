import './style.css';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { throttle } from 'lodash-es';
import { Index } from 'lunr';
import { ReflectionKind } from 'typedoc/models';

import { getReflectionKindName, loadData, SearchItem, TypeDocData } from './data';

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

  const data = await loadData();
  const index = Index.load(data.search.index);

  console.log(data);

  input.addEventListener(
    'input',
    throttle((event) => {
      const text = event.target.value?.trim();

      const [hide, show] = text ? [main, alt] : [alt, main];
      hide.classList.add('hidden');
      show.classList.remove('hidden');

      results.items = text ? performSearch(text, data, index) : [];
    }, 500),
  );
});

function performSearch(text: string, data: TypeDocData, index: Index) {
  // Perform a wildcard search
  const query = text
    .split(/\s+/)
    .filter((x) => x)
    .map((x) => `*${x}*`)
    .join(' ')
    .trim();

  const items = index.search(query);
  if (items.length === 0) {
    return [];
  }

  for (const item of items) {
    const row = data.search.rows[Number(item.ref)];

    // boost score by exact match on name
    if (row.name.toLowerCase().startsWith(text.toLowerCase())) {
      item.score *= 10 / (1 + Math.abs(row.name.length - text.length));
    }
  }

  items.sort((a, b) => b.score - a.score);

  return items.map((x) => data.search.rows[Number(x.ref)]);
}

@customElement('oxide-search-results')
class OxideSearchResults extends LitElement {
  @property({ attribute: false })
  accessor items: SearchItem[] = [];

  createRenderRoot() {
    // Disable Shadow DOM.
    return this;
  }

  render() {
    const items = this.items.map((item) => {
      const trace = map(
        item.parent?.split('.') ?? [],
        (name) => html`<span class="parent">${name}.</span>`,
      );

      const classes = {
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

      return html`
        <a class="result-item" href="${item.url}">
          <span class="result-name">
            <span class="typename">
              ${getReflectionKindName(item.kind)}
            </span>
          </span>
          <span class="result-name">
            <div class="path">
              ${trace}<span class="${classes[item.kind] ?? 'mod'}">${item.name}</span>
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
