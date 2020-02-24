import '../components/Main/index.scss';

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import Overview from '../components/Main/Overview';

interface IAuthorState {
  byId: string[];
  author: object;
  pending: boolean;
}

interface ISettingsState {
  language: string;
}

const Main: React.FC = () => {
  const authorState: IAuthorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;

  if (pending) {
    return (
      <Container className="content">
        <Spinner className="spinner" animation="border" />
      </Container>
    );
  }

  return (
    <Container className="content">
      <Row>
        <Overview />
      </Row>
      <Row>
        <Col>
          <TodayAuthor data={byId} author={author} lang={language} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
