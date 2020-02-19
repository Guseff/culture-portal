import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

import * as React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import { Provider } from 'react-redux';

import Header from '../components/Header/index';
import Main from './Main';
import AuthorList from './AuthorList';
import Author from './Author';
import WorkLog from './WorkLog';
import StyleGuide from './StyleGuide';
import About from './About';
import Footer from '../components/Footer/index';
import configureStore from '../store';

const store = configureStore();

const Router = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/list" component={AuthorList} />
        <Route path="/author" component={Author} />
        <Route path="/worklog" component={WorkLog} />
        <Route path="/styleguide" render={StyleGuide} />
        <Route path="/about" component={About} />
        <Footer />
      </ConnectedRouter>
    </Provider>
  );
};

export default Router;
