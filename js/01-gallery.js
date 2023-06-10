import { galleryItems } from "./gallery-items.js";

const el = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item "> 
<a href="${original}" class="gallery__link">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
//     </a></li>`
  );
}
const markup = createGalleryMarkup(galleryItems);
el.innerHTML = markup.join("");
el.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();

  const instance =
    basicLightbox.create(`<img  src="${event.target.dataset.source}"  width='800'>
  `);

  instance.show();
  if (instance.visible()) {
    window.addEventListener("keydown", onEscapeClose);
  }

  function onEscapeClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
