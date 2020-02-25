export const getLanguageString = lang => {
  switch (lang) {
    case 'ru':
      return 'RU';

    case 'be':
      return 'BE';

    default:
      return 'EN';
  }
};

export const isNotEmptyObj = obj => {
  return obj ? Object.keys(obj).length !== 0 : false;
};
