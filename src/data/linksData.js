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
    id: 2,
    type: "basic",
    title: "Sitio Web Personal",
    url: "https://tusitio.com",
    span: "col-2",
    rowSpan: "row-1"
  },
  {
    id: 3,
    type: "icon-left",
    title: "Mi canal de Tutoriales",
    url: "https://youtube.com",
    image: ASSET_PATH + "img1.webp",
    span: "col-4",
    rowSpan: "row-2"
  },
  {
    id: 4,
    type: "card-bg",
    title: "Último Dibujo Publicado",
    url: "https://instagram.com",
    image: ASSET_PATH + "img2.webp",
    span: "col-2",
    rowSpan: "row-2"
  },
  {
    id: 5,
    type: "card-full",
    title: "Comisiones Abiertas",
    description: "Consigue una ilustración personalizada hecha a tu medida.",
    url: "https://ko-fi.com/tuusuario",
    image: ASSET_PATH + "img3.webp",
    span: "col-2",
    rowSpan: "row-2"
  },
  {
    id: 6,
    type: "card-vertical",
    title: "Sketchbook 2026",
    url: "https://behance.net",
    image: ASSET_PATH + "img1.webp",
    span: "col-1",
    rowSpan: "row-2"
  },
  {
    id: 7,
    type: "instagram-post",
    username: "tu_usuario_art",
    userAvatar: ASSET_PATH + "img1.webp",
    url: "https://instagram.com/p/tu-post",
    aspect: "square", // "square" (1:1) o "portrait" (vertical)
    images: [
      ASSET_PATH + "img1.webp",
      ASSET_PATH + "img2.webp",
      ASSET_PATH + "img3.webp"
    ],
    caption: "Nuevo proceso de ilustración digital. ¿Cuál es vuestra favorita? ✨🎨",
    span: "col-2",
    rowSpan: "row-2"
  },
  {
    id: 8,
    type: "card-vertical-full",
    title: "Proceso de Pintura",
    description: "Paso a paso de mi última obra digital.",
    url: "https://patreon.com",
    image: ASSET_PATH + "img2.webp",
    span: "col-1",
    rowSpan: "row-2"
  },
  {
    id: 9,
    type: "instagram-post",
    username: "tu_usuario_art",
    userAvatar: ASSET_PATH + "img1.webp",
    url: "https://instagram.com/p/tu-post",
    aspect: "portrait",
    images: [
      ASSET_PATH + "img1.webp",
      ASSET_PATH + "img2.webp"
    ],
    caption: "Ilustración en formato vertical (retrato). ✨",
    span: "col-2",
    rowSpan: "row-3"
  }
];