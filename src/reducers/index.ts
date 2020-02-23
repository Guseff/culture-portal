import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import settings from './settings';
import { author } from './author';
import { developer } from './developer';
import { aboutProject } from './aboutProject';

export const reducerCreator = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    settings,
    author,
    developer,
    aboutProject,
  });
