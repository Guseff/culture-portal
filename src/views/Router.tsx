import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header/Header';
import Main from './Main';
import About from './About';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default Router;
