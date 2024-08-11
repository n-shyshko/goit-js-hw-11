import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImages} from "./js/pixabay-api";
import {renderGallery} from "./js/render-functions";

import iconError from './img/nok.svg';


const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.js-form');
const ulGallery = document.querySelector('.js-gallery');

searchForm.addEventListener('submit', getGallery);

function getGallery(event) {
  
  event.preventDefault(); 
  ulGallery.innerHTML = '';
  loader.classList.remove('hidden');
 
  const searchText = event.target.elements.search.value.trim().toLowerCase();
  
  if (searchText === "") {
            iziToast.error({
            message:'The field cannot be empty!',
            position: 'topRight',
            title: 'Error',
            titleColor: '#fff',
            messageColor: '#fff',
            backgroundColor: '#ef4040',
            timeout: 2000,
            iconUrl: iconError,
            });
            loader.classList.add('hidden');
          
  } else {
      getImages(searchText)
      .then(response => {
        if (response.hits.length === 0) {
          iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            title: 'Error',
            titleColor: '#fff',
            messageColor: '#fff',
            backgroundColor: '#ef4040',
            timeout: 2000,
            iconUrl: iconError,
          });
        }
        renderGallery(response.hits);
        loader.classList.remove('hidden');
      })

      .catch(error => console.log(error))
      .finally(() => {
        event.target.reset();
        loader.classList.add('hidden');
      });
  }};




