import { MAX_SCALE, MIN_SCALE, SCALE_STEP, SCALE_FACTOR } from './constants.js';
const form = document.querySelector('.img-upload__form');
const scaleDecreaser = form.querySelector('.scale__control--smaller');
const scaleIncreaser = form.querySelector('.scale__control--bigger');
const scaleValue = form.querySelector('.scale__control--value');
const picturePreview = form.querySelector('.img-upload__preview img');

let currentScale = MAX_SCALE;

const render = () => {
  scaleValue.value = `${currentScale}%`;
  picturePreview.style.transform = `scale(${currentScale * SCALE_FACTOR})`;
};

const onIncreaserClick = () => {
  currentScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
  render();
};

const onDecreaserClick = () => {
  currentScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
  render();
};

scaleIncreaser.addEventListener('click', onIncreaserClick);

scaleDecreaser.addEventListener('click', onDecreaserClick);

export const reset = () => {
  currentScale = MAX_SCALE;
  render();
};

reset();
