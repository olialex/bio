// src/main.js
import { renderProjectLinks } from './js/renderer.js';

// 1. Esperamos a que todo el HTML cargue antes de ejecutar funciones
document.addEventListener('DOMContentLoaded', () => {
  renderProjectLinks();
});

// 2. Guardamos el ancho inicial de la pantalla en una variable
let lastWidth = window.innerWidth;

const setVh = () => {
  // 3. LA MAGIA ANTIGLITCH: 
  // Solo recalculamos la altura si el ANCHO de la pantalla cambia (ej. cuando giras el celular).
  // Si haces scroll vertical, la barra del navegador se oculta, la altura cambia pero el ancho NO.
  // Al poner este filtro, evitamos que la página dé saltos molestos al hacer scroll.
  if (window.innerWidth !== lastWidth) {
    lastWidth = window.innerWidth;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};

// 4. Escuchamos si la ventana cambia de tamaño
window.addEventListener('resize', setVh);

// 5. Ejecutamos la función por primera vez al cargar la página
setVh();