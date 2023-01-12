import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGalleryEl = document.querySelector('.gallery');
const itemGalleryMarkup = createGalleryItemMarkup(galleryItems);

boxGalleryEl.insertAdjacentHTML('beforeend', itemGalleryMarkup);

boxGalleryEl.addEventListener('click', onBoxGalleryClick);

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
}

console.log(galleryItems);
