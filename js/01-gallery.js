import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGalleryEl = document.querySelector('.gallery');
const itemGalleryMarkup = createGalleryItemMarkup(galleryItems);

boxGalleryEl.addEventListener('click', onBoxGalleryClick);

boxGalleryEl.insertAdjacentHTML('beforeend', itemGalleryMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}

function onBoxGalleryClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);

  instance.show();
}
