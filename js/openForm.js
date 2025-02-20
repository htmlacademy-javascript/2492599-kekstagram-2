import { isEscapeKey } from './utils';
import { isValid } from './validator.js';
import { reset as resetValidation } from './validator.js';
import { reset as resetScale } from './scale.js';
import { reset as resetFilters } from './filters.js';

const body = document.querySelector('body');
const form = body.querySelector('.img-upload__form');
const pictureInput = form.querySelector('.img-upload__input');
const editorForm = form.querySelector('.img-upload__overlay');
const cancelFormButton = form.querySelector('.img-upload__cancel');
const submitFormButton = form.querySelector('.img-upload__submit');

const formFields = form.querySelector('.img-upload__text');
const hashtagsInput = formFields.querySelector('.text__hashtags');
const commentInput = formFields.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

export const openForm = () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  resetValidation();
  resetScale();
  resetFilters();
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelFormButton.addEventListener('click', () => {
  closeForm();
});

pictureInput.addEventListener('change', () => {
  openForm();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid) {
    console.log('Можно отправлять');
  }
});

hashtagsInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});
