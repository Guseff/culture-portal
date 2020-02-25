import { WORKLOG_GET, RequestState } from 'Constants';

interface WorkLog {
  feature: string;
  from: string;
  to: string;
  spent: string;
  who: string;
}

interface WorkLogInOneLanguage {
  title: string;
  headers: {
    feature: string;
    from: string;
    to: string;
    spent: string;
    who: string;
  };
  body: WorkLog[];
}

interface WorkLogPayload {
  workLog: {
    ru: WorkLogInOneLanguage[];
    en: WorkLogInOneLanguage[];
    be: WorkLogInOneLanguage[];
  };
}

interface WorkLogState {
  worklog: WorkLogPayload | {};
  pending: boolean | null;
}

const initialState: WorkLogState = {
  worklog: {},
  pending: null,
};

export const worklog = (
  state: WorkLogState = initialState,
  action: { type: string; payload: WorkLogPayload }
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
        worklog: payload,
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
