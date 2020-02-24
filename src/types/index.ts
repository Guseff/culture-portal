export interface ISettingsState {
  language: string;
}

export interface IAuthorState {
  byId: string[];
  author: object;
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

export interface IStoreState {
  settings: ISettingsState;
  author: IAuthorState;
  aboutProject: IAboutProjectState;
  router: {
    location: {
      pathname: string;
    };
  };
}
