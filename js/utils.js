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
