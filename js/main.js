import {PHOTOSNUMBERS} from './constants.js';
import {createPhotoesInfo} from './getPictureData.js';
import { renderPictures } from './renderPictures.js';
import './openForm.js';

const pictures = createPhotoesInfo(PHOTOSNUMBERS);
renderPictures(pictures);
