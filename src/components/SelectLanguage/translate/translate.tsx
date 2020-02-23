import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

const lng = localStorage.getItem('language') || 'ru';

i18n.use(initReactI18next).init({
  resources,
  lng: lng,
  fallbackLng: 'ru',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

export default i18n;
