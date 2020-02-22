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
