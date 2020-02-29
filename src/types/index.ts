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

export interface IWorkLogState {
  pending: boolean | null;
  worklog: {
    ru: {
      title: string;
      headers: IWorkLogString;
      body: IWorkLogString[];
    };
    be: {
      title: string;
      headers: IWorkLogString;
      body: IWorkLogString[];
    };
    en: {
      title: string;
      headers: IWorkLogString;
      body: IWorkLogString[];
    };
  };
  difficulties: {
    ru: {
      title: string;
      text: string[];
    };
    be: {
      title: string;
      text: string[];
    };
    en: {
      title: string;
      text: string[];
    };
  };
  selfCheck: {
    ru: object;
    be: object;
    en: object;
  };
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
