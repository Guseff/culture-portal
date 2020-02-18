import { SET_LANGUAGE, LANGUAGES } from '../constants';

const initialState = {
  language: LANGUAGES.BE,
};

const language = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  console.log('reducer ', action);
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default language;