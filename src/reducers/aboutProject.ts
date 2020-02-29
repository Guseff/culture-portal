import { ABOUT_PROJECT_GET, RequestState } from 'Constants';

interface IAboutProject {
  title: string;
  description: string;
}

interface IAboutProjectPayload {
  aboutProject: {
    ru: IAboutProject;
    en: IAboutProject;
    be: IAboutProject;
  };
}

interface IAboutProjectState {
  aboutProject: IAboutProjectPayload | {};
  pending: boolean | null;
}

const initialState: IAboutProjectState = {
  aboutProject: {},
  pending: null,
};

export const aboutProject = (
  state: IAboutProjectState = initialState,
  action: { type: string; payload: IAboutProjectPayload }
) => {
  const { type, payload } = action;

  switch (type) {
    case `${ABOUT_PROJECT_GET}${RequestState.REQUEST}`:
      return {
        ...state,
        pending: true,
      };

    case `${ABOUT_PROJECT_GET}${RequestState.SUCCESS}`:
      return {
        aboutProject: payload,
        pending: false,
      };

    case `${ABOUT_PROJECT_GET}${RequestState.FAIL}`:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};
