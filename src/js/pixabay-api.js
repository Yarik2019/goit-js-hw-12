import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getPhotos(q, currentPage, perPage) {
  const options = {
    params: {
      key: '45225008-7dd168b8c56fcbfbf82a602af',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: perPage,
    },
  };

  const { data } = await axios.get('', options);

  return data;
}
