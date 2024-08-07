import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getPhotos(q, currentPage, perPage = 15) {
  const API_KEY = '45225008-7dd168b8c56fcbfbf82a602af';

  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error.status);
  }
}
