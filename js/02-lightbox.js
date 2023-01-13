import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGalleryEl = document.querySelector('.gallery');
const itemGalleryMarkup = createGalleryItemMarkup(galleryItems);

boxGalleryEl.insertAdjacentHTML('beforeend', itemGalleryMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
