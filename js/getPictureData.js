import { DESCRIPTIONS, MESSAGES, NAMES} from './data.js';
import { getRandomArrayElement, getRandomId, getRandomNumber } from './utils.js';

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

export const createPhotoesInfo = (count) => Array.from({ length: count}, createPhotoInfo);
