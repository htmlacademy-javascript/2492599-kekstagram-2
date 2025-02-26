import { ALERT_TIME, TIMEOUT_DELAY } from './constants.js';

export const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomId = (min, max) => {
  const previousIds = [];

  return function () {
    let currentId = getRandomNumber(min, max);
    if (previousIds.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousIds.includes(currentId)) {
      currentId = getRandomNumber(min, max);
    }
    previousIds.push(currentId);
    return currentId;
  };
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export const showAlert = () => {
  const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const dataErrorAlert = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorAlert);
  setTimeout(() => {
    dataErrorAlert.remove();
  }, ALERT_TIME);
};

export const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
