import { openModal } from './openModal.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localData;

const clearPictureList = () => {
  const currentPictures = document.querySelectorAll('.picture');
  if (currentPictures) {
    currentPictures.forEach((element) => element.remove());
  }
};

export const renderPictures = (picturesData) => {
  localData = [...picturesData];
  clearPictureList();
  const picturesListFragment = document.createDocumentFragment();

  picturesData.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = picture.url;
    pictureImg.alt = picture.description;
    pictureElement.dataset.pictureId = picture.id;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    picturesListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesListFragment);
};

picturesContainer.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if(pictureElement) {
    const id = Number(pictureElement.dataset.pictureId);
    const pictureData = localData.find((item) => item.id === id);
    openModal(pictureData);
  }
});
