export const getLanguageString = lang => {
  switch (lang) {
    case 'ru':
      return 'русский';

    case 'be':
      return 'беларуская';

    default:
      return 'english';
  }
};

export const getNumberFromRoute = route =>
  Number.parseInt(route.match(/\d+$/)[0], 10);
