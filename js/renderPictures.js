const picturesContainer = document.querySelector('.pictures');
// const pictureList = pictureContainer.children;

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesListFragment = document.createDocumentFragment();

export const renderPictures = (picturesData) => {
  picturesData.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = picture.url;
    pictureImg.alt = picture.description;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    picturesListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesListFragment);
};
