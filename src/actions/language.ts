import { SET_LANGUAGE } from '../constants';

export const setLanguage = (lang: string) => {
  console.log('set', lang);
  return { type: SET_LANGUAGE, payload: lang };
};
