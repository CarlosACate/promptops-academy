/*
 * Camada visual do catálogo — responsabilidade de Carlos.
 *
 * Integração esperada:
 * - Danyelle fornece os dados e chama PromptOpsCatalog.render(...).
 * - Levi conecta busca e filtros aos controles marcados com data-integration.
 * Este arquivo não carrega JSON, não filtra e não persiste dados.
 */
(() => {
  const grid = document.querySelector('#prompt-grid');
  const state = document.querySelector('#catalog-state');
  const resultCount = document.querySelector('#result-count');
  const promptCount = document.querySelector('#prompt-count');
  const categoryCount = document.querySelector('#category-count');
  const pipelineCount = document.querySelector('#pipeline-count');

  const STATUS_LABELS = {
    rascunho: 'Rascunho',
    em_revisao: 'Em revisão',
    publicado: 'Publicado',
    arquivado: 'Arquivado'
  };

  const MATURITY_LABELS = {
    experimental: 'Experimental',
    em_validacao: 'Em validação',
    validado: 'Validado'
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function categoryColor(index) {
    if (index % 3 === 1) return 'blue';
    if (index % 3 === 2) return 'green';
    return '';
  }

  function createCard(prompt, context) {
    const category = context.categories.find(item => item.id === prompt.categoryId);
    const subcategory = category?.subcategories?.find(item =>
      typeof item === 'string' ? item === prompt.subcategoryId : item.id === prompt.subcategoryId
    );
    const version = context.versions.find(item => item.id === prompt.currentVersionId);
    const tests = context.tests.filter(item => item.promptId === prompt.id);
    const categoryIndex = Math.max(0, context.categories.indexOf(category));

    const card = element('article', 'prompt-card');
    card.dataset.promptId = prompt.id || '';

    const top = element('div', 'card-top');
    const badge = element('span', 'category-badge', category?.name || 'Sem categoria');
    const color = categoryColor(categoryIndex);
    if (color) badge.classList.add(color);
    top.append(badge, element('span', 'favorite-mark', prompt.favorite ? '★' : '☆'));

    card.append(top);
    card.append(element('h3', '', prompt.title || 'Prompt sem título'));
    card.append(element('p', 'objective', prompt.objective || 'Objetivo não informado.'));

    const subcategoryName = typeof subcategory === 'string' ? subcategory : subcategory?.name;
    if (subcategoryName) card.append(element('p', 'subcategory', subcategoryName));

    const tags = element('div', 'tags');
    for (const tag of Array.isArray(prompt.tags) ? prompt.tags : []) {
      tags.append(element('span', 'tag', tag));
    }
    card.append(tags);

    const footer = element('footer', 'card-footer');
    footer.append(element('span', '', `▤ V${version?.number || 1}`));
    footer.append(element('span', '', `♧ ${tests.length} Testes`));
    footer.append(element('span', `status-${String(prompt.status || 'rascunho').replace('_', '-')}`, `✦ ${STATUS_LABELS[prompt.status] || 'Rascunho'}`));
    footer.append(element('span', '', MATURITY_LABELS[prompt.maturity] || 'Experimental'));
    card.append(footer);

    return card;
  }

  function showState(type, message) {
    const defaults = {
      empty: ['Nenhum prompt cadastrado ainda.', 'Os cards aparecerão aqui quando os dados do catálogo forem conectados.'],
      loading: ['Carregando seus prompts...', 'Aguarde enquanto os dados do catálogo são preparados.'],
      error: ['Não foi possível carregar os dados salvos.', 'Atualize a página ou tente novamente em instantes.'],
      noResults: ['Nenhum prompt combina com esta busca.', 'Ajuste o termo ou limpe os filtros.']
    };
    const content = message || defaults[type] || defaults.empty;
    state.replaceChildren(
      element('strong', '', Array.isArray(content) ? content[0] : content),
      ...(Array.isArray(content) && content[1] ? [element('span', '', content[1])] : [])
    );
    state.dataset.state = type;
    state.hidden = false;
    grid.replaceChildren();
    resultCount.textContent = '0 resultados';
  }

  function render(prompts = [], context = {}) {
    const safeContext = {
      categories: Array.isArray(context.categories) ? context.categories : [],
      versions: Array.isArray(context.versions) ? context.versions : [],
      tests: Array.isArray(context.tests) ? context.tests : []
    };
    const items = Array.isArray(prompts) ? prompts : [];

    grid.replaceChildren(...items.map(prompt => createCard(prompt, safeContext)));
    state.hidden = items.length > 0;
    resultCount.textContent = `${items.length} ${items.length === 1 ? 'resultado' : 'resultados'}`;
    promptCount.textContent = String(context.totalPrompts ?? items.length);
    categoryCount.textContent = String(context.totalCategories ?? safeContext.categories.length);
    pipelineCount.textContent = String(context.totalPipelines ?? 0);

    if (!items.length) showState(context.state || 'empty', context.message);
  }

  const menuToggle = document.querySelector('#menu-toggle');
  const sidebar = document.querySelector('#sidebar');
  menuToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  sidebar.addEventListener('click', event => {
    if (event.target.closest('a') && window.innerWidth <= 700) {
      sidebar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });

  window.PromptOpsCatalog = { render, showState, createCard };
  window.dispatchEvent(new CustomEvent('promptops:catalog-ready'));
  render();
})();
