import { COMMENT_STEP } from './constants.js';
import { isEscapeKey } from './utils.js';

const body = document.querySelector('body');
const pictureModalElement = document.querySelector('.big-picture');
const pictureModalCloseElement = pictureModalElement.querySelector('.big-picture__cancel');
const imageElement = pictureModalElement.querySelector('.big-picture__img img');
const likesElement = pictureModalElement.querySelector('.likes-count');
const descriptionElement = pictureModalElement.querySelector('.social__caption');
const commentsCountElement = pictureModalElement.querySelector('.social__comment-count');
const commentsShownElement = commentsCountElement.querySelector('.social__comment-shown-count');
const commentsTotalElement = commentsCountElement.querySelector('.social__comment-total-count');
const commentsList = pictureModalElement.querySelector('.social__comments');
const commentsLoader = pictureModalElement.querySelector('.social__comments-loader');
const commentTemplate = commentsList.querySelector('.social__comment');

let localComments;
let renderedCommets = 0;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const showModal = () => {
  pictureModalElement.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const renderStatistic = () => {
  commentsShownElement.textContent = renderedCommets;
};

const renderLoader = () => {
  if (localComments.length) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const commentsListFragment = document.createDocumentFragment();
  localComments.splice(0, COMMENT_STEP).forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentImgElement = commentElement.querySelector('.social__picture');
    commentImgElement.src = comment.avatar;
    commentImgElement.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.appendChild(commentElement);

    renderedCommets++;
  });
  commentsList.appendChild(commentsListFragment);
  renderStatistic();
  renderLoader();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

const renderModal = (picture) => {
  localComments = [...picture.comments];
  renderedCommets = 0;
  commentsList.innerHTML = '';
  imageElement.src = picture.url;
  imageElement.alt = picture.description;
  descriptionElement.textContent = picture.description;
  likesElement.textContent = picture.likes;

  commentsTotalElement.textContent = picture.comments.length;

  renderComments();
};


export const openModal = (data) => {
  showModal();
  renderModal(data);
};

const closeModal = () => {
  pictureModalElement.classList.add('hidden');

  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

pictureModalCloseElement.addEventListener('click', () => {
  closeModal();
});
