import { FILTERS, FILTERS_SETTINGS } from './constants.js';

const form = document.querySelector('.img-upload__form');
const filterSlider = form.querySelector('.effect-level__slider');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const filterContainer = form.querySelector('.effects');
const filterLevelValue = form.querySelector('.effect-level__value');
const picturePreview = form.querySelector('.img-upload__preview img');

let currentEffect = FILTERS.NONE;

noUiSlider.create(filterSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const render = () => {
  const { style, units } = FILTERS_SETTINGS[currentEffect];
  picturePreview.style.filter = `${style}(${filterLevelValue.value}${units})`;
};

filterSlider.noUiSlider.on('update', () => {
  filterLevelValue.value = filterSlider.noUiSlider.get();
  render();
});

const updateSlider = () => {
  const { min, max, step } = FILTERS_SETTINGS[currentEffect];
  filterSlider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};

filterContainer.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (target.value === FILTERS.NONE) {
    reset();
  } else {
    updateSlider();
    sliderContainer.classList.remove('hidden');
  }
});

export function reset() {
  currentEffect = FILTERS.NONE;
  updateSlider();
  document.querySelector(`.effects__radio[value=${FILTERS.NONE}]`).checked = true;
  sliderContainer.classList.add('hidden');
  picturePreview.style.filter = '';
}

reset();
