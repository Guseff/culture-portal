import { SET_LANGUAGE, LANGUAGES } from '../constants';

const initialState = {
  language: LANGUAGES.RU,
};

const settings = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default settings;
