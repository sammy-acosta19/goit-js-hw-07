import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

function renderGalleryItems() {
  const galleryHTML = galleryItems.map((item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `).join("");

  gallery.innerHTML = galleryHTML;
}

renderGalleryItems();

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const largeImageURL = e.target.parentElement.getAttribute("href");

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250
    });

    lightbox.open({ url: largeImageURL });
  }
});
