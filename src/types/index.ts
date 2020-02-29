export interface ISettingsState {
  language: string;
}

export interface IAuthorState {
  byId: string[];
  author: object;
  pending: boolean | null;
}

export interface IDeveloperState {
  byId: string[];
  developer: object;
  pending: boolean | null;
}

export interface IAboutProject {
  ru: {
    title: string;
    description: string;
  };
  be: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}

export interface IAboutProjectState {
  aboutProject: IAboutProject;
  pending: boolean | null;
}

export interface IWorkLogString {
  feature: string;
  from: string;
  to: string;
  spent: string;
  who: string;
}

export interface IWorkLogInOneLanguage {
  title: string;
  headers: IWorkLogString;
  body: IWorkLogString[];
}

export interface ISelfCheckInOneLanguage {
  [key: string]: string;
}

export interface IDifficultiesInOneLanguage {
  title: string;
  text: string[];
}

export interface IWorkLogPayload<T> {
  worklog:
    | {
        ru: IWorkLogInOneLanguage;
        be: IWorkLogInOneLanguage;
        en: IWorkLogInOneLanguage;
      }
    | T;
  difficulties:
    | {
        ru: IDifficultiesInOneLanguage;
        be: IDifficultiesInOneLanguage;
        en: IDifficultiesInOneLanguage;
      }
    | T;
  selfCheck:
    | {
        ru: ISelfCheckInOneLanguage;
        be: ISelfCheckInOneLanguage;
        en: ISelfCheckInOneLanguage;
      }
    | T;
}
export interface IWorkLogState extends IWorkLogPayload<{}> {
  pending: boolean | null;
}

export interface IStoreState {
  settings: ISettingsState;
  author: IAuthorState;
  aboutProject: IAboutProjectState;
  developer: IDeveloperState;
  worklog: IWorkLogState;
  router: {
    location: {
      pathname: string;
    };
  };
}
