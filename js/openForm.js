import { HASHTAG_TEMPLATE, MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT } from './constants';
import { isEscapeKey } from './utils';

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
  pictureInput.value = '';
  hashtagsInput.value = '';
  commentInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelFormButton.addEventListener('click', () => {
  closeForm();
});


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateHashtags = (value) => {
  if (value === '') {
    return true;
  }
  const hashtags = value.split(' ');
  return hashtags.every((element) => HASHTAG_TEMPLATE.test(element));
};

const validateHashtagsNumber = (value) => {
  const hashtags = value.split(' ');
  return hashtags.length <= MAX_HASHTAG_COUNT;
};

const validateHashtagsRepeat = (value) => {
  const hashtags = value.toLowerCase().split(' ');
  const unrepeatedHashtags = Array.from(new Set(hashtags));
  return hashtags.length === unrepeatedHashtags.length;
};

const validateComment = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagsInput, validateHashtags, 'введён невалидный хэштег');
pristine.addValidator(hashtagsInput, validateHashtagsNumber, 'максимальное количество хэштегов 5');
pristine.addValidator(hashtagsInput, validateHashtagsRepeat, 'хэштеги повторяются');
pristine.addValidator(commentInput, validateComment, 'длина комментария больше 140 символов');

pictureInput.addEventListener('change', () => {
  openForm();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
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
