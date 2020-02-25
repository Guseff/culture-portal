import '../components/Author/';
import React from 'react';
import { Container, Spinner, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  AuthorTimeline,
  ModalVideoWindow,
} from '../components/Author/';
import { useSelector } from 'react-redux';
import { IStoreState, ISettingsState, IAuthorState } from 'Types';

const Author: React.FC = () => {
  const authorState: IAuthorState = useSelector(
    (store: IStoreState) => store.author
  );
  const settingsState: ISettingsState = useSelector(
    (store: IStoreState) => store.settings
  );
  const currentAuthorId: string = useSelector((store: IStoreState) =>
    store.router.location.pathname.slice(8)
  );

  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;

  return (
    <Container className="content">
      <h3>Author Page</h3>
      <Nav.Link as={Link} to="/list">
        Back to Author List
      </Nav.Link>
      {pending ? (
        <Spinner animation="grow" variant="info" />
      ) : (
        byId.length && (
          <>
            <Row>
              <Col md="auto" className="Author-page--photo-col">
                <AuthorPhoto
                  photo={author[currentAuthorId].photo}
                  name={author[currentAuthorId][language].name}
                />
                <ModalVideoWindow
                  videoId={author[currentAuthorId][language].video}
                />
              </Col>
              <Col sm="6">
                <AuthorInfo
                  name={author[currentAuthorId][language].name}
                  years={author[currentAuthorId][language].years}
                  birthCity={author[currentAuthorId][language].birthCity}
                  description={author[currentAuthorId][language].description}
                />
              </Col>
              <Col md="auto">
                <AuthorMap
                  longitude={
                    author[currentAuthorId][language].location.longitude
                  }
                  latitude={author[currentAuthorId][language].location.latitude}
                />
              </Col>
            </Row>
            <AuthorTimeline
              author={author}
              id={currentAuthorId}
              language={language}
            />
          </>
        )
      )}
    </Container>
  );
};

export default Author;
