export const PHOTOSNUMBERS = 25;
export const COMMENT_STEP = 5;
export const HASHTAG_TEMPLATE = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_HASHTAG_COUNT = 5;
export const MAX_COMMENT_LENGTH = 140;
export const SPACE = /\s+/g;
export const SCALE_STEP = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const SCALE_FACTOR = 0.01;

export const FILTERS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const FILTERS_SETTINGS = {
  [FILTERS.NONE]: {
    min: 1,
    max: 100,
    step: 1,
    style: '',
    units: ''
  },
  [FILTERS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [FILTERS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [FILTERS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [FILTERS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [FILTERS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  }
};

export const ALERT_TIME = 5000;
export const RANDOM_PICTURE_COUNT = 10;
export const TIMEOUT_DELAY = 500;

export const PictureFilters = {
  DEFAULT: 'filter-default',
  DISCUSSED: 'filter-discussed',
  RANDOM: 'filter-random'
};
