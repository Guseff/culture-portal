import '../components/Main/index.scss';

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import Overview from '../components/Main/Overview';

class Main extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
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
