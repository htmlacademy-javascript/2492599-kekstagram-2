import { renderPictures } from './renderPictures.js';
import './openForm.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { showPicturesFilters } from './pictureFilters.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
    showPicturesFilters(pictures);
  })
  .catch(() => {
    showAlert();
  }
  );
