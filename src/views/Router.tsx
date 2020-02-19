import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

import * as React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { history } from 'Store';

import Header from '../components/Header/index';
import Main from './Main/index';
import AuthorList from './AuthorList/index';
import Author from './Author/index';
import WorkLog from './WorkLog/index';
import StyleGuide from './StyleGuide/index';
import About from './About/index';
import Footer from '../components/Footer/index';

import { authorGetList } from 'Actions';

const Router = (props: any) => {
  const { authorGetList } = props;

  React.useEffect(() => {
    authorGetList();
  }, []);

  return (
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
  );
};

export default connect(null, { authorGetList })(Router);
