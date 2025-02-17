import { openModal } from "./openModal";

const picturesContainer = document.querySelector('.pictures');
// const pictureList = pictureContainer.children;

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localData;

export const renderPictures = (picturesData) => {
  localData = [...picturesData];
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
