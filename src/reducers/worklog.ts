import { WORKLOG_GET, RequestState } from 'Constants';

interface IWorkLog {
  feature: string;
  from: string;
  to: string;
  spent: string;
  who: string;
}

interface IWorkLogInOneLanguage {
  title: string;
  headers: {
    feature: string;
    from: string;
    to: string;
    spent: string;
    who: string;
  };
  body: IWorkLog[];
}

interface ISelfCheckInOneLanguage {
  [key: string]: string;
}

interface IDifficultiesInOneLanguage {
  title: string;
  text: string[];
}

interface IItranslation<T> {
  ru: T[];
  en: T[];
  be: T[];
}

interface IWorkLogPayload<T> {
  worklog: IItranslation<IWorkLogInOneLanguage> | T;
  difficulties: IItranslation<IDifficultiesInOneLanguage> | T;
  selfCheck: IItranslation<ISelfCheckInOneLanguage> | T;
}

interface IWorkLogState extends IWorkLogPayload<{}> {
  pending: boolean | null;
}

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
