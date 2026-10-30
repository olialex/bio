// src/main.js
import { renderProjectLinks } from './js/renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjectLinks();
});

// Calcula la altura real del innerHeight y la guarda en una variable CSS
const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVh);
setVh(); // Se ejecuta al cargar