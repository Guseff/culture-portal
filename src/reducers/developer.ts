import { DEVELOPER_GET_LIST, RequestState } from 'Constants';

const initialState = {
  byId: [],
  developer: {},
  pending: null,
};

interface DeveloperPayload {
  byId: string[];
  developer: {};
}

export const developer = (
  state = initialState,
  action: { type: string; payload: DeveloperPayload }
) => {
  const { type, payload } = action;

  switch (type) {
    case `${DEVELOPER_GET_LIST}${RequestState.REQUEST}`:
      return {
        ...state,
        pending: true,
      };

    case `${DEVELOPER_GET_LIST}${RequestState.SUCCESS}`:
      return {
        ...payload,
        pending: false,
      };

    case `${DEVELOPER_GET_LIST}${RequestState.FAIL}`:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};
