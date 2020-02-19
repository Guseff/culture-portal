import { AUTHOR_GET_LIST, RequestState } from 'Constants';

const initialState = {
  author: {},
  pending: null,
};

export const author = (
  state = initialState,
  action: { type: string; payload: string } // TODO: поменять на интерфейс response
) => {
  const { type, payload } = action;

  switch (type) {
    case `${AUTHOR_GET_LIST}${RequestState.REQUEST}`:
      return {
        ...state,
        pending: true,
      };

    case `${AUTHOR_GET_LIST}${RequestState.SUCCESS}`:
      return {
        author: payload,
        pending: false,
      };

    case `${AUTHOR_GET_LIST}${RequestState.FAIL}`:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};
