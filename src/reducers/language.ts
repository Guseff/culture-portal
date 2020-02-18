import { SET_LANGUAGE } from '../constants';

const initialState = {
  language: 'en',
};

const language = (
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

export default language;
