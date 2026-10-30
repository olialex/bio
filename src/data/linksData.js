// src/data/linksData.js

const ASSET_PATH = "./src/assets/";

export const linksData = [
  {
    id: 1,
    type: "basic",
    title: "Sitio Web Personal",
    url: "https://tusitio.com",
    span: "col-2",
    rowSpan: "row-1"
  },
  {
    id: 1,
    type: "basic",
    title: "Sitio Web Personal",
    url: "https://tusitio.com",
    span: "col-2",
    rowSpan: "row-1"
  },
  {
    id: 2,
    type: "icon-left",
    title: "Mi canal de Tutoriales",
    url: "https://youtube.com",
    image: ASSET_PATH + "img1.webp",
    span: "col-4",
    rowSpan: "row-2"
  },
  {
    id: 3,
    type: "card-bg",
    title: "Último Dibujo Publicado",
    url: "https://instagram.com",
    image: ASSET_PATH + "img2.webp",
    span: "col-2",
    rowSpan: "row-2"
  },
  {
    id: 4,
    type: "card-full",
    title: "Comisiones Abiertas",
    description: "Consigue una ilustración personalizada hecha a tu medida.",
    url: "https://ko-fi.com/tuusuario",
    image: ASSET_PATH + "img3.webp",
    span: "col-2",
    rowSpan: "row-2"
  },
  // --- ✨ NUEVAS CARDS VERTICALES TIPO PINTEREST ---
  {
    id: 5,
    type: "card-vertical",
    title: "Sketchbook 2026",
    url: "https://behance.net",
    image: ASSET_PATH + "img1.webp",
    span: "col-1", // Ocupa 1 columna pero es más alta
    rowSpan: "row-2"
  },
  // Añade este objeto a tu array en src/data/linksData.js:
  
  {
    id: 7,
    type: "instagram-post",
    username: "tu_usuario_art",
    userAvatar: ASSET_PATH + "img1.webp",
    url: "https://instagram.com/p/tu-post",
    // 🖼️ Array con las imágenes que quieras (pueden ser 2, 3, 5, 10...)
    aspect: "square",
    images: [
      ASSET_PATH + "img1.webp",
      ASSET_PATH + "img2.webp",
      ASSET_PATH + "img3.webp",
    ],
    caption: "Nuevo proceso de ilustración digital. ¿Cuál es vuestra favorita? ✨🎨",
    span: "col-2", // Ocupa todo el ancho en móvil para lucir como un post real
    rowSpan: "row-2"
  },

  {
    id: 6,
    type: "card-vertical-full",
    title: "Proceso de Pintura",
    description: "Paso a paso de mi última obra digital.",
    url: "https://patreon.com",
    image: ASSET_PATH + "img2.webp",
    span: "col-1", // Ocupa 1 columna de ancho y altura destacada con info
    rowSpan: "row-2"
  },
 
  {
    id: 7,
    type: "instagram-post",
    username: "tu_usuario_art",
    userAvatar: ASSET_PATH + "img1.webp",
    url: "https://instagram.com/p/tu-post",
    aspect: "portrait", // 🎛️ Aquí defines: "square" (1:1) o "portrait" (Vertical)
    images: [
      ASSET_PATH + "img1.webp",
      ASSET_PATH + "img2.webp",
    ],
    caption: "Ilustración en formato vertical (retrato). ✨",
    span: "col-2",
    rowSpan: "row-3"
  },
];

