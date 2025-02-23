import { renderPictures } from './renderPictures.js';
import './openForm.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch(() => {
    showAlert();
  }
  );
