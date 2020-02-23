import '../components/Main/index.scss';

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import Overview from '../components/Main/Overview';

class Main extends React.Component {
  title: string;
  name: string;
  i18nKey: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = '';
    this.name = '';
  }

  render() {
    return (
      <Container className="content">
        <Row>
          <Col className="col_item1">
            <Overview />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodayAuthor />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
