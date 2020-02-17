import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header/Header';
import Main from './Main';
import AuthorList from './AuthorList';
import Author from './Author';
import WorkLog from './WorkLog';
import StyleGuide from './StyleGuide';
import About from './About';
import Footer from '../components/Footer/Footer';

const Router = () => {
  return (
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
  );
};

export default Router;
