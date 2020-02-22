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
        if (response.status !== 200) {
          throw new Error("Server doesn't response");
        }
        const {
          data: { items },
          data: {
            includes: { Asset: images },
          },
        } = response;

        const byId = [];
        const author = {};

        items.forEach(el => {
          const photo = images.filter(
            photo => photo.sys.id === el.fields.photo.sys.id
          )[0].fields.file.url;
          const id = el.sys.id;
          const data = el.fields.authorData;
          byId.push(id);
          author[id] = { ...data, photo, id };
        });

        dispatch({
          type: `${AUTHOR_GET_LIST}${RequestState.SUCCESS}`,
          payload: { byId, author },
        });
      })
      .catch(() => {
        dispatch({ type: `${AUTHOR_GET_LIST}${RequestState.FAIL}` });
      });
  };
};
