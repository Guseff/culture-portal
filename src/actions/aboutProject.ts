import axios, { Method } from 'axios';
import { Dispatch } from 'redux';
import { ABOUT_PROJECT_GET, RequestState, REST } from 'Constants';

export const aboutProjectGet = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: `${ABOUT_PROJECT_GET}${RequestState.REQUEST}` });
    axios({
      method: REST.Method.GET as Method,
      url: `${REST.API.BASE_URL}/spaces/${REST.API.SPACE_ID}/entries?access_token=${REST.API.TOKEN}&content_type=${REST.API.CONTENT_TYPE.AboutProject}`,
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Server doesn't response");
        }
        dispatch({
          type: `${ABOUT_PROJECT_GET}${RequestState.SUCCESS}`,
          payload: response.data.items[0].fields.aboutProjectData,
        });
      })
      .catch(() => {
        dispatch({ type: `${ABOUT_PROJECT_GET}${RequestState.FAIL}` });
      });
  };
};
