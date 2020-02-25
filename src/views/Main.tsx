import '../components/Main/index.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import Overview from '../components/Main/Overview';
import {
  IStoreState,
  ISettingsState,
  IAuthorState,
  IAboutProjectState,
} from 'Types';

const Main: React.FC = () => {
  const authorState: IAuthorState = useSelector(
    (store: IStoreState) => store.author
  );
  const settingsState: ISettingsState = useSelector(
    (store: IStoreState) => store.settings
  );
  const aboutProjectState: IAboutProjectState = useSelector(
    (store: IStoreState) => store.aboutProject
  );
  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;
  const { aboutProject }: IAboutProjectState = aboutProjectState;
  const aboutProjectPending: boolean | null = aboutProjectState.pending;

  return (
    <Container className="content">
      {pending || aboutProjectPending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <>
          <Row>
            <Overview overview={aboutProject} language={language} />
          </Row>
          <Row>
            <Col>
              <TodayAuthor
                authorIds={byId}
                author={author}
                language={language}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Main;
