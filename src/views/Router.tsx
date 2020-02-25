import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.scss';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { history } from 'Store';

import Header from '../components/Header/index';
import Main from './Main';
import AuthorList from './AuthorList';
import Author from './Author';
import WorkLog from './WorkLog';
import StyleGuide from './StyleGuide';
import About from './About';
import NoMatch from './NoMatch';
import Footer from '../components/Footer/index';
import { ExampleList } from 'Components';

import {
  authorGetList,
  developerGetList,
  aboutProjectGet,
  worklogGet,
} from 'Actions';

const Router = (props: any) => {
  const {
    authorGetList,
    developerGetList,
    aboutProjectGet,
    worklogGet,
  } = props;

  React.useEffect(() => {
    authorGetList();
    developerGetList();
    aboutProjectGet();
    worklogGet();
  }, []);

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={AuthorList} />
        <Route path="/author/:id" component={Author} />
        <Route path="/worklog" component={WorkLog} />
        <Route path="/styleguide" render={StyleGuide} />
        <Route path="/about" component={About} />
        <Route path="/ex" component={ExampleList} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  );
};

export default connect(null, {
  authorGetList,
  developerGetList,
  aboutProjectGet,
  worklogGet,
})(Router);
