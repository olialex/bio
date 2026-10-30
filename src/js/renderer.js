// src/js/renderer.js
import { linksData } from '../data/linksData.js';

// Tipos que usan imagen de fondo
const BG_TYPES = ['card-bg', 'card-full', 'card-vertical', 'card-vertical-full'];

// Contenido interno de cada tipo de tarjeta estándar
const templates = {
  'basic': (i) => `<span>${i.title}</span>`,

  'icon-left': (i) => `
    <img src="${i.image}" alt="" width="45" height="45" loading="lazy" />
    <span>${i.title}</span>`,

  'card-bg': (i) => `<div class="project-content"><span>${i.title}</span></div>`,

  'card-full': (i) => `
    <div class="project-content">
      <h3>${i.title}</h3>
      <p>${i.description}</p>
    </div>`,

  'card-vertical': (i) => `<div class="project-content"><span>${i.title}</span></div>`,

  'card-vertical-full': (i) => `
    <div class="project-content">
      <h3>${i.title}</h3>
      <p>${i.description}</p>
    </div>`
};

function createInstagramCard(item, classes) {
  const card = document.createElement('div');
  card.className = classes;

  const total = item.images.length;
  const aspectClass = item.aspect === 'portrait' ? 'aspect-portrait' : 'aspect-square';
  const slides = item.images
    .map((img) => `<img src="${img}" class="ig-slide-img" alt="Imagen del post" loading="lazy" />`)
    .join('');

  card.innerHTML = `
    <div class="ig-header">
      <div class="ig-user-info">
        <img src="${item.userAvatar}" class="ig-avatar" alt="" width="28" height="28" loading="lazy" />
        <span class="ig-username">${item.username}</span>
      </div>
      <span class="ig-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-point">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
</svg></span>
    </div>

    <div class="ig-slider-container ${aspectClass}">
      <button class="ig-nav-btn ig-prev" data-action="prev" aria-label="Anterior">❮</button>
      <div class="ig-slides-track">${slides}</div>
      <button class="ig-nav-btn ig-next" data-action="next" aria-label="Siguiente">❯</button>
      <div class="ig-pagination">1/${total}</div>
    </div>

    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="ig-link">
      <div class="ig-footer">
        <p class="ig-caption"><strong>${item.username}</strong> ${item.caption}</p>
      </div>
    </a>
  `;

  // Buscamos los elementos DENTRO de la tarjeta (no hace falta ID ni setTimeout)
  const track = card.querySelector('.ig-slides-track');
  const pag = card.querySelector('.ig-pagination');

  track.addEventListener(
    'scroll',
    () => {
      const index = Math.round(track.scrollLeft / track.clientWidth) + 1;
      pag.textContent = `${Math.min(Math.max(index, 1), total)}/${total}`;
    },
    { passive: true }
  );

  card.querySelectorAll('.ig-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const direction = btn.dataset.action === 'next' ? 1 : -1;
      track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
    });
  });

  return card;
}

function createStandardCard(item, classes) {
  const a = document.createElement('a');
  a.href = item.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.className = classes;

  if (BG_TYPES.includes(item.type)) {
    a.style.backgroundImage = `url('${item.image}')`;
  }

  const template = templates[item.type];
  if (template) a.innerHTML = template(item);

  return a;
}

export function renderProjectLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;

  // Armamos todo en memoria y lo insertamos UNA sola vez
  const fragment = document.createDocumentFragment();

  linksData.forEach((item) => {
    const colSpan = item.span || 'col-1';
    const rowSpan = item.rowSpan || 'row-1';
    const classes = `project-card ${colSpan} ${rowSpan} type-${item.type}`;

    const card =
      item.type === 'instagram-post'
        ? createInstagramCard(item, classes)
        : createStandardCard(item, classes);

    fragment.appendChild(card);
  });

  container.replaceChildren(fragment);
}