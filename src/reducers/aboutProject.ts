import { ABOUT_PROJECT_GET, RequestState } from 'Constants';

interface AboutProject {
  title: string;
  description: string;
}

interface AboutProjectPayload {
  aboutProject: {
    ru: AboutProject;
    en: AboutProject;
    be: AboutProject;
  };
}

interface AboutProjectState {
  aboutProject: AboutProjectPayload | {};
  pending: boolean | null;
}

const initialState: AboutProjectState = {
  aboutProject: {},
  pending: null,
};

export const aboutProject = (
  state: AboutProjectState = initialState,
  action: { type: string; payload: AboutProjectPayload }
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
        ...payload,
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
