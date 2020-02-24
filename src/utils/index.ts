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
