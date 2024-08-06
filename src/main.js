// import iziToast from 'izitoast';
// import SimpleLightbox from 'simplelightbox';
// import 'izitoast/dist/css/iziToast.min.css';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { getPhotos, perPage } from './js/pixabay-api';
// import { imagesMarkup } from './js/render-functions';
// import iconError from './img/error.svg';
// import iconSuccess from './img/success.svg';
// import iconCaution from './img/caution.svg';

// const formElement = document.querySelector('.js-form');
// const ul = document.querySelector('.js-gallery-list');
// const loader = document.querySelector('.loader');
// const loadBtn = document.querySelector('.load-btn');
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
// let searchQuery;
// let currentPage = 1;
// let numberOfPages = null;

// function showClassAdd(elem) {
//   elem.classList.add('hidden');
// }

// function hideClassRemove(elem) {
//   elem.classList.remove('hidden');
// }

// formElement.addEventListener('submit', onSearchGallery);
// loadBtn.addEventListener('click', OnLoadMore);

// async function onSearchGallery(event) {
//   event.preventDefault();
//   ul.innerHTML = '';
//   currentPage = 1;
//   showClassAdd(loadBtn);

//   const formData = new FormData(formElement);
//   searchQuery = formData.get('search').trim();

//   if (searchQuery === '') {
//     return iziToastMessageError('The field cannot be empty!');
//   }

//   hideClassRemove(loader);

//   try {
//     const data = await getPhotos(searchQuery, currentPage);

//     if (data.hits.length === 0) {
//       return iziToastMessageError(
//         'Sorry, there are no images matching your search query. Please try again!'
//       );
//     }

//     if (data.totalHits !== 0) {
//       iziToastMessageSuccess(
//         `We found ${data.totalHits} images for your request!`
//       );
//     }

//     if (data.totalHits > 15) {
//       hideClassRemove(loadBtn);
//     }

//     numberOfPages = Math.ceil(data.totalHits / perPage);

//     ul.innerHTML = imagesMarkup(data.hits);

//     lightbox.refresh();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     showClassAdd(loader);
//     event.target.reset();
//   }
// }

// async function OnLoadMore() {
//   showClassAdd(loadBtn);
//   currentPage += 1;

//   hideClassRemove(loader);

//   try {
//     const data = await getPhotos(searchQuery, currentPage);
//     ul.insertAdjacentHTML('beforeend', imagesMarkup(data.hits));

//     lightbox.refresh();

//     if (currentPage < numberOfPages) {
//       hideClassRemove(loadBtn);
//     }

//     if (currentPage === numberOfPages) {
//       iziToastMessageWarning(
//         "We're sorry, but you've reached the end of search results."
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     showClassAdd(loader);
//     scrollPage();
//   }
// }

// function scrollPage() {
//   const pictureHeight = ul.firstElementChild.getBoundingClientRect().height;

//   window.scrollBy({
//     top: pictureHeight * 2,
//     behavior: 'smooth',
//   });
// }

// function iziToastMessageError(message) {
//   return iziToast.error({
//     iconUrl: iconError,
//     title: 'Error',
//     titleColor: '#fff',
//     messageColor: '#fff',
//     backgroundColor: '#ef4040',
//     position: 'topRight',
//     message: message,
//   });
// }

// function iziToastMessageSuccess(message) {
//   return iziToast.success({
//     iconUrl: iconSuccess,
//     title: 'OK',
//     titleColor: '#fff',
//     messageColor: '#fff',
//     backgroundColor: '#59a10d',
//     position: 'topRight',
//     message: message,
//   });
// }

// function iziToastMessageWarning(message) {
//   return iziToast.warning({
//     iconUrl: iconCaution,
//     title: 'WARNING',
//     titleColor: '#fff',
//     messageColor: '#fff',
//     backgroundColor: '#09f',
//     position: 'topRight',
//     message: message,
//   });
// }

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos, perPage } from './js/pixabay-api';
import { imagesMarkup } from './js/render-functions';
import iconError from './img/error.svg';
import iconSuccess from './img/success.svg';
import iconCaution from './img/caution.svg';

const formElement = document.querySelector('.js-form');
const ulElement = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let searchQuery;
let currentPage = 1;
let numberOfPages = null;

formElement.addEventListener('submit', onSearchPhotos);
loadBtn.addEventListener('click', OnLoadMore);

async function onSearchPhotos(event) {
  event.preventDefault();
  ulElement.innerHTML = '';
  currentPage = 1;
  loadBtn.classList.add('hidden');

  const formData = new FormData(formElement);
  searchQuery = formData.get('search').trim();

  if (searchQuery === '') {
    return iziToast.error({
      iconUrl: iconError,
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
      message: 'The field cannot be empty!',
    });
  }

  loader.classList.remove('hidden');

  try {
    const result = await getPhotos(searchQuery, currentPage);

    if (result.hits.length === 0) {
      return iziToast.error({
        iconUrl: iconError,
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    if (result.totalHits !== 0) {
      iziToast.success({
        iconUrl: iconSuccess,
        title: 'OK',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        message: `We found ${result.totalHits} images for your request!`,
      });
    }

    if (result.totalHits > 15) {
      loadBtn.classList.remove('hidden');
    }

    numberOfPages = Math.ceil(result.totalHits / perPage);

    ulElement.innerHTML = imagesMarkup(result.hits);

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('hidden');
    event.target.reset();
  }
}

async function OnLoadMore() {
  loadBtn.classList.add('hidden');
  currentPage += 1;

  loader.classList.remove('hidden');

  try {
    const result = await getPhotos(searchQuery, currentPage);
    ulElement.insertAdjacentHTML('beforeend', imagesMarkup(result.hits));

    lightbox.refresh();

    if (currentPage < numberOfPages) {
      loadBtn.classList.remove('hidden');
    }

    if (currentPage === numberOfPages) {
      iziToast.warning({
        iconUrl: iconCaution,
        title: 'WARNING',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#09f',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('hidden');
    scrollPage();
  }
}

function scrollPage() {
  const pictureHeight =
    ulElement.firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: pictureHeight * 2,
    behavior: 'smooth',
  });
}
