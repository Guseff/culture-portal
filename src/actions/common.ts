import { SET_LANGUAGE, SET_ACTIVE_AUTHOR } from '../constants';

export const setLanguage = (lang: string) => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setAuthor = (pageNumber: number) => {
  return { type: SET_ACTIVE_AUTHOR, payload: pageNumber };
};
