import { PictureFilters, RANDOM_PICTURE_COUNT } from './constants.js';
import { renderPictures } from './renderPictures.js';
import { debounce } from './utils.js';

const filtersForm = document.querySelector('.img-filters__form');
const filtersList = document.querySelector('.img-filters');

let localData;
let currentFilter = PictureFilters.DEFAULT;

const debouncedRender = debounce(renderPictures);

const getFilteredData = {
  [PictureFilters.DEFAULT]: () => localData,
  [PictureFilters.DISCUSSED]: () => [...localData].sort((b, a) => a.comments.length - b.comments.length),
  [PictureFilters.RANDOM]: () => [...localData].sort(() => Math.random() - 0.5).slice(0, RANDOM_PICTURE_COUNT)
};

const setActiveButton = (button) => {
  if (button.id === currentFilter) {
    return;
  }
  currentFilter = button.id;
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');

  debouncedRender(getFilteredData[currentFilter]());
};

filtersForm.addEventListener('click', ({ target }) => {
  if (target.classList.contains('img-filters__button')) {
    setActiveButton(target);
  }
});

export const showPicturesFilters = (pics) => {
  filtersList.classList.remove('img-filters--inactive');
  localData = [...pics];
};
