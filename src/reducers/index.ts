import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import settings from './settings';
import { author } from './author';

export const reducerCreator = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    settings,
    author,
  });
