// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const imgGalleryContainer = document.querySelector('.gallery');
const createListMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
         `<li class="gallery__item">
        <a class="gallery__link"
        href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
  </a>
</li>`
    )
    .join("");

imgGalleryContainer.insertAdjacentHTML('afterbegin', createListMarkup);

new SimpleLightbox(".gallery__link", {
    captionDelay: 250,
    captionsData: "alt",
    });
