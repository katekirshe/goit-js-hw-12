import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadButton, hideLoadButton } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userInputValue = "";
let page = 1;
const form = document.querySelector(".form");
const loadMore = document.querySelector("#load-more")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    userInputValue = event.target.elements["search-text"].value;
    if (!userInputValue.trim().length) {
        iziToast.error({ 
            message: "The field can't be empty!",
            position: 'topRight'
        })
        return 
    }
    clearGallery();

    await onClickListener();
    event.target.reset()
}) 

loadMore.addEventListener("click", async () => {
    page += 1;
   await onClickListener();
})

const onClickListener = async () => {
    try {
        showLoader();
        hideLoadButton();
        const data = await getImagesByQuery(userInputValue, page, 15);
        if (!data.hits.length) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            hideLoadButton();
            return
        }
        showLoadButton();
        createGallery(data.hits)
    } catch (e) {
        console.log(e);
        iziToast.error({
            message: "API error.",
            position: 'topRight'
        })
    } finally {
       hideLoader();
       showLoadButton();
    }
}