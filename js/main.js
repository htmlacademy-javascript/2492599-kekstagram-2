const DESCRIPTIONS = [
  'Новогодняя ель',
  'Вечеринка',
  'Новый автомобиль',
  'Однажды вечером',
  'Оркестр',
  'Кроссовки',
  'Крабик',
  'Ретро автомобиль',
  'Пролетая над Африкой',
  'Легкий перекус',
  'Котик',
  'Отель на пляже',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Женя Пупсик',
  'Котик',
  'Саша Иванова',
  'Просто Вася',
  'Лео',
  'Фунтик',
  'Катерина',
  'Петр Сидоренко',
  'Линда',
  'Джек',
  'Людмила',
  'Федя Федоров',
  'Матроскин',
  'Барбоскин',
  'Павел Первый',
];

const PHOTOSNUMBERS = 25;

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomId = (min, max) => {
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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generatePhotoId = getRandomId(1, 25);
const generateUrlId = getRandomId(1, 25);
const generateCommentId = getRandomId(1, 1000);


const createComment = () => {
  return {
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoInfo = () => {
  return {
    id: generatePhotoId(),
    url: 'photos/' + generateUrlId() + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: getRandomNumber(0, 30) }, createComment),
  };
};

const createPhotoesInfo = Array.from({ length: PHOTOSNUMBERS}, createPhotoInfo);

console.log(createPhotoesInfo);
