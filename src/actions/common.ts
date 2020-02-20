import { SET_LANGUAGE } from '../constants';

export const setLanguage = (lang: string) => {
  return { type: SET_LANGUAGE, payload: lang };
};
