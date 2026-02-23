import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMore = document.querySelector("#load-more");

export function createGallery(images) {
    const galleryMarkup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return (`<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${likes}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${views}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${comments}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${downloads}</div>
                    </li>
                </ul>
            </a>
        </li>`)
    })
    .join("");


    gallery.insertAdjacentHTML('beforeend', galleryMarkup);



    const modalWindow = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    modalWindow.refresh();
};



export function clearGallery() {
    gallery.innerHTML = "";
};

export function showLoader() {
   loader.classList.remove("hidden");
};

export function hideLoader() {
    loader.classList.add("hidden");
};

export function showLoadButton() {
   loadMore.classList.remove("hidden");
};

export function hideLoadButton() {
    loadMore.classList.add("hidden");
};
// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
