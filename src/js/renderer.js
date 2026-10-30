// src/js/renderer.js
import { linksData } from '../data/linksData.js';

export function renderProjectLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;

  container.innerHTML = '';

  linksData.forEach((item, index) => {
    const colSpan = item.span || 'col-1';
    const rowSpan = item.rowSpan || 'row-1';

    // Creamos un identificador único basado en el índice del array
    const uniqueId = `ig-post-${index}`;

    if (item.type === 'instagram-post') {
      const card = document.createElement('div');
      card.className = `project-card ${colSpan} ${rowSpan} type-${item.type}`;
      
      const slidesHTML = item.images.map(img => `<img src="${img}" class="ig-slide-img" alt="Post slide" loading="lazy"/>`).join('');
      const aspectClass = item.aspect === 'portrait' ? 'aspect-portrait' : 'aspect-square';
      const totalImages = item.images.length;

      card.innerHTML = `
        <div class="ig-header">
          <div class="ig-user-info">
            <img src="${item.userAvatar}" class="ig-avatar" alt="${item.username}" loading="lazy"/>
            <span class="ig-username">${item.username}</span>
          </div>
          <span class="ig-icon">📷</span>
        </div>
        
        <div class="ig-slider-container ${aspectClass}">
          <button class="ig-nav-btn ig-prev" data-action="prev" data-target="${uniqueId}" aria-label="Anterior">❮</button>
          <div class="ig-slides-track" id="${uniqueId}">
            ${slidesHTML}
          </div>
          <button class="ig-nav-btn ig-next" data-action="next" data-target="${uniqueId}" aria-label="Siguiente">❯</button>
          <div class="ig-pagination" id="pag-${uniqueId}">1/${totalImages}</div>
        </div>

        <a href="${item.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
          <div class="ig-footer">
            <p class="ig-caption"><strong>${item.username}</strong> ${item.caption}</p>
          </div>
        </a>
      `;

      container.appendChild(card);

      // Lógica robusta para manejar el scroll y los botones con delegación de eventos en la card
      setTimeout(() => {
        const track = document.getElementById(uniqueId);
        const pag = document.getElementById(`pag-${uniqueId}`);
        
        if (track && pag) {
          // Actualizar contador con Math.ceil para evitar errores de decimales
          track.addEventListener('scroll', () => {
            const scrollPos = track.scrollLeft;
            const slideWidth = track.clientWidth;
            const currentIndex = Math.min(Math.max(Math.round(scrollPos / slideWidth) + 1, 1), totalImages);
            pag.textContent = `${currentIndex}/${totalImages}`;
          });

          // Control de botones de flecha
          card.querySelectorAll('.ig-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const action = btn.getAttribute('data-action');
              const slideWidth = track.clientWidth;
              
              if (action === 'next') {
                track.scrollBy({ left: slideWidth, behavior: 'smooth' });
              } else {
                track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
              }
            });
          });
        }
      }, 50);

    } else {
      // Tarjetas estándar
      const a = document.createElement('a');
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = `project-card ${colSpan} ${rowSpan} type-${item.type}`;

      if (item.type === 'basic') {
        a.innerHTML = `<span>${item.title}</span>`;
      } 
      else if (item.type === 'icon-left') {
        a.innerHTML = `
          <img src="${item.image}" alt="${item.title}" loading="lazy"/>
          <span>${item.title}</span>
        `;
      } 
      else if (item.type === 'card-bg') {
        a.style.backgroundImage = `url('${item.image}')`;
        a.innerHTML = `<div class="project-content"><span>${item.title}</span></div>`;
      } 
      else if (item.type === 'card-full') {
        a.style.backgroundImage = `url('${item.image}')`;
        a.innerHTML = `
          <div class="project-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `;
      }
      else if (item.type === 'card-vertical') {
        a.style.backgroundImage = `url('${item.image}')`;
        a.innerHTML = `<div class="project-content"><span>${item.title}</span></div>`;
      }
      else if (item.type === 'card-vertical-full') {
        a.style.backgroundImage = `url('${item.image}')`;
        a.innerHTML = `
          <div class="project-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `;
      }

      container.appendChild(a);
    }
  });
}