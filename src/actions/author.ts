import axios, { Method } from 'axios';
import { Dispatch } from 'redux';
import { AUTHOR_GET_LIST, RequestState, REST } from 'Constants';

export const authorGetList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: `${AUTHOR_GET_LIST}${RequestState.REQUEST}` });
    axios({
      method: REST.Method.GET as Method,
      url: `${REST.API.BASE_URL}/spaces/${REST.API.SPACE_ID}/entries?access_token=${REST.API.TOKEN}&content_type=${REST.API.CONTENT_TYPE}`,
    })
      .then(response => {
        dispatch({
          type: `${AUTHOR_GET_LIST}${RequestState.SUCCESS}`,
          payload: response,
        });
      })
      .catch(() => {
        dispatch({ type: `${AUTHOR_GET_LIST}${RequestState.FAIL}` });
      });
  };
};
