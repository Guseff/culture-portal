import { SET_LANGUAGE } from '../constants';

const setLanguage = (lang: string) => {
  return { type: SET_LANGUAGE, payload: lang };
};

export default setLanguage;
