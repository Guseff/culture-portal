import { AUTHOR_GET_LIST, RequestState } from 'Constants';

const initialState = {
  byId: [],
  author: {},
  pending: null,
};

interface IAuthorPayload {
  byId: string[];
  author: {};
}

export const author = (
  state = initialState,
  action: { type: string; payload: IAuthorPayload }
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
        ...payload,
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
