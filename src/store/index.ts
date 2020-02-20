import { createStore } from 'redux';
import { reducerCreator } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const reducer = reducerCreator(history);
const middlewares = [routerMiddleware(history), thunk];

const configureStore = (
  initialState: {} = {
    settings: { language: 'en', dayPage: new Date().getDay() + 1 },
  }
) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
