import axios, { Method } from 'axios';
import { Dispatch } from 'redux';
import { DEVELOPER_GET_LIST, RequestState, REST } from 'Constants';
import { parseResponse } from './utils/parseResponse';

export const developerGetList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: `${DEVELOPER_GET_LIST}${RequestState.REQUEST}` });
    axios({
      method: REST.Method.GET as Method,
      url: `${REST.API.BASE_URL}/spaces/${REST.API.SPACE_ID}/entries?access_token=${REST.API.TOKEN}&content_type=${REST.API.CONTENT_TYPE.Developer}`,
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Server doesn't response");
        }
        const payload = parseResponse(response, 'developerData', 'developer');
        dispatch({
          type: `${DEVELOPER_GET_LIST}${RequestState.SUCCESS}`,
          payload,
        });
      })
      .catch(() => {
        dispatch({ type: `${DEVELOPER_GET_LIST}${RequestState.FAIL}` });
      });
  };
};
