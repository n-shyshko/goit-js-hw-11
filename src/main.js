import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImages} from "../src/js/pixabay-api";
import {renderGallery} from "../src/js/render-functions";

import {applySpanClasses, removeSpanClasses} from "../src/js/render-functions";

// import iconError from './img/error.svg';


const spanElement = document.querySelector('.loader');
// applySpanClasses(spanElement);
// removeSpanClasses(spanElement);


const searchForm = document.querySelector('.js-form');
const ulGallery = document.querySelector('.js-gallery');
// console.log(spanStatus);


searchForm.addEventListener('submit', getGallery);




function getGallery(event) {
  
  event.preventDefault();
  
  ulGallery.innerHTML = '';
  removeSpanClasses(spanElement);
 
  

  const searchText = event.target.elements.search.value.trim().toLowerCase();
  // console.log(searchText);


  if (searchText === "") {
              iziToast.error({
            message:
              'The field cannot be empty!',
            position: 'topRight',
            timeout: 2000,
            icon: '',
          });

  } else {
        getImages(searchText)
      .then(response => {
        if (response.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 2000,
            icon: '',
          });
        }
        renderGallery(response.hits);
        applySpanClasses(spanElement);
        

      })

      .catch(error => console.log(error))
      .finally(() => {
        event.target.reset();
        removeSpanClasses(spanElement);
      });
  }};




