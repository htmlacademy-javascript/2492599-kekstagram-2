import { ALERT_TIME, TIMEOUT_DELAY } from './constants.js';

export const isEscapeKey = (evt) => evt.key === 'Escape';

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
