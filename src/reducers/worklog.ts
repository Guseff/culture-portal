import { WORKLOG_GET, RequestState } from 'Constants';
import { IWorkLogState, IWorkLogPayload } from '../types';

const initialState: IWorkLogState = {
  worklog: {},
  difficulties: {},
  selfCheck: {},
  pending: null,
};

export const worklog = (
  state: IWorkLogState = initialState,
  action: { type: string; payload: IWorkLogPayload<{}> }
) => {
  const { type, payload } = action;

  switch (type) {
    case `${WORKLOG_GET}${RequestState.REQUEST}`:
      return {
        ...state,
        pending: true,
      };

    case `${WORKLOG_GET}${RequestState.SUCCESS}`:
      return {
        ...payload,
        pending: false,
      };

    case `${WORKLOG_GET}${RequestState.FAIL}`:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};
