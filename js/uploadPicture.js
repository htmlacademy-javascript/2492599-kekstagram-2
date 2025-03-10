import { PICTURE_TYPES } from './constants.js';

const form = document.querySelector('.img-upload__form');
const pictureInput = form.querySelector('.img-upload__input');
const picturePreview = form.querySelector('.img-upload__preview');
const filterContainer = form.querySelector('.effects');
const filters = filterContainer.querySelectorAll('.effects__preview');

export const uploadFile = () => {
  const file = pictureInput.files[0];
  const fileName = file.name.toLowerCase();
  const isMatched = PICTURE_TYPES.some((type) => fileName.endsWith(type));
  if (isMatched) {
    const fileUrl = URL.createObjectURL(file);
    picturePreview.children[0].src = fileUrl;
    filters.forEach((element) => {
      element.style.backgroundImage = `url("${fileUrl}")`;
    });
  }
};
