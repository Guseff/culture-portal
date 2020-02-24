import axios, { Method } from 'axios';
import { Dispatch } from 'redux';
import { WORKLOG_GET, RequestState, REST } from 'Constants';

export const worklogGet = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: `${WORKLOG_GET}${RequestState.REQUEST}` });
    axios({
      method: REST.Method.GET as Method,
      url: `${REST.API.BASE_URL}/spaces/${REST.API.SPACE_ID}/entries?access_token=${REST.API.TOKEN}&content_type=${REST.API.CONTENT_TYPE.Worklog}`,
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Server doesn't response");
        }
        dispatch({
          type: `${WORKLOG_GET}${RequestState.SUCCESS}`,
          payload: response.data.items[0].fields.worklogData,
        });
      })
      .catch(() => {
        dispatch({ type: `${WORKLOG_GET}${RequestState.FAIL}` });
      });
  };
};
