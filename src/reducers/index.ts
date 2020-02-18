import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import language from './language';

export const reducerCreator = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    language,
  });
