import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54654074-13d582212f11236cf0611e9cc";

export async function getImagesByQuery(query, page, perPage) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                page: page,
                per_page: perPage,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true
            }
        })
        if (!response.data.hits.length) {
          iziToast.error({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight'
          });
      }; 
      return response.data;
    } catch (e) {
        console.log(e);
        iziToast.error({ 
            message: "API error.",
            position: 'topRight'
        })
    }
}
