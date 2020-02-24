import '../components/Main/index.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import Overview from '../components/Main/Overview';
import { AppState } from '../types';

interface IAuthorState {
  byId: string[];
  author: object;
  pending: boolean;
}

interface ISettingsState {
  language: string;
}

const Main: React.FC = () => {
  const authorState: IAuthorState = useSelector(
    (store: AppState) => store.author
  );
  const settingsState = useSelector((store: AppState) => store.settings);
  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;

  return (
    <Container className="content">
      {pending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <>
          <Row>
            <Overview />
          </Row>
          <Row>
            <Col>
              <TodayAuthor data={byId} author={author} lang={language} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Main;
