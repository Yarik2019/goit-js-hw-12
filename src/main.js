import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api';
import { imagesMarkup } from './js/render-functions';

import iconError from './img/error.svg';
import iconSuccess from './img/success.svg';
import iconCaution from './img/caution.svg';

const formElement = document.querySelector('.js-form');
const ul = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let searchQuery;
let currentPage = 1;
let numberOfPages = null;
let perPage = 15;

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showBtn() {
  loadBtn.classList.remove('hidden');
}

function hideBtn() {
  loadBtn.classList.add('hidden');
}

formElement.addEventListener('submit', onSearchGallery);
loadBtn.addEventListener('click', OnLoadMore);

async function onSearchGallery(event) {
  event.preventDefault();
  currentPage = 1;
  hideBtn();
  ul.innerHTML = '';
  searchQuery = event.currentTarget.elements.search.value.trim();

  if (searchQuery === '') {
    return iziToastMessageError('The field cannot be empty!');
  }

  showLoader();

  try {
    const response = await getPhotos(searchQuery, currentPage, perPage);

    if (response.hits.length === 0) {
      return iziToastMessageError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    if (response.totalHits !== 0) {
      iziToastMessageSuccess(
        `We found ${response.totalHits} images for your request!`
      );
    }

    if (response.totalHits > 15) {
      showBtn();
    }

    numberOfPages = Math.ceil(response.totalHits / perPage);
    console.log(numberOfPages);

    ul.innerHTML = imagesMarkup(response.hits);

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function OnLoadMore() {
  hideBtn();
  currentPage += 1;

  showLoader();

  try {
    const response = await getPhotos(searchQuery, currentPage, perPage);
    ul.insertAdjacentHTML('beforeend', imagesMarkup(response.hits));

    lightbox.refresh();

    if (currentPage < numberOfPages) {
      showBtn();
    }

    if (currentPage === numberOfPages) {
      iziToastMessageWarning(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    scrollPage();
  }
}

function scrollPage() {
  const pictureHeight = ul.firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: pictureHeight * 2,
    behavior: 'smooth',
  });
}

function iziToastMessageError(message) {
  return iziToast.error({
    iconUrl: iconError,
    title: 'Error',
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    message: message,
  });
}

function iziToastMessageSuccess(message) {
  return iziToast.success({
    iconUrl: iconSuccess,
    title: 'OK',
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#59a10d',
    position: 'topRight',
    message: message,
  });
}

function iziToastMessageWarning(message) {
  return iziToast.warning({
    iconUrl: iconCaution,
    title: 'WARNING',
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#09f',
    position: 'topRight',
    message: message,
  });
}
