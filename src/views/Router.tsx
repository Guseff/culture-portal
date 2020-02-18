import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header/Header';
import Main from './Main';
import AuthorList from './AuthorList';
import Author from './Author';
import WorkLog from './WorkLog';
import StyleGuide from './StyleGuide';
import About from './About';
import Footer from '../components/Footer/Footer';
import configureStore from '../store';

// TODO: move in file
const initialStore = {
  language: 'en',
};

const store = configureStore(initialStore);

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/list" component={AuthorList} />
        <Route path="/author" component={Author} />
        <Route path="/worklog" component={WorkLog} />
        <Route path="/styleguide" render={StyleGuide} />
        <Route path="/about" component={About} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
