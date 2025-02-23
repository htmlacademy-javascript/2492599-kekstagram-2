import { isValid } from './validator.js';
import { reset as resetValidation } from './validator.js';
import { reset as resetScale } from './scale.js';
import { reset as resetFilters } from './filters.js';
import { removeEscapeControl, setEscapeControl } from './escControl.js';
import { sendData } from './api.js';
import { showPopup } from './popups.js';

const body = document.querySelector('body');
const form = body.querySelector('.img-upload__form');
const pictureInput = form.querySelector('.img-upload__input');
const editorForm = form.querySelector('.img-upload__overlay');
const cancelFormButton = form.querySelector('.img-upload__cancel');
const submitFormButton = form.querySelector('.img-upload__submit');

const formFields = form.querySelector('.img-upload__text');
const hashtagsInput = formFields.querySelector('.text__hashtags');
const commentInput = formFields.querySelector('.text__description');

const closeFormFlag = () => !(document.activeElement === hashtagsInput || document.activeElement === commentInput);

const closeForm = () => {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  resetValidation();
  resetScale();
  resetFilters();
};

export const openForm = () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeForm, closeFormFlag);
};

cancelFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscapeControl();
});

pictureInput.addEventListener('change', () => {
  openForm();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid) {
    sendData(new FormData(evt.target))
      .then(()=>{
        closeForm();
        removeEscapeControl();
        showPopup('success');
      })
      .catch(() => {
        showPopup('error');
      });
  }
});
