import '../components/Author/';
import React from 'react';
import { Container, Spinner, Nav, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  AuthorTimeline,
  AuthorModalVideo,
  AuthorSlider,
  AuthorWorks,
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
  const currentAuthorId: string = useSelector(
    (store: IStoreState) =>
      store.router.location.pathname.slice(8) || store.author.byId[0]
  );

  const hasAuthor = authorState.byId.includes(currentAuthorId);
  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;

  if (!pending && !hasAuthor) return <Redirect to="../404" />;

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
                <AuthorModalVideo
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
              <Col md="auto" className="map">
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
            <div className="works-container">
              <AuthorWorks
                worksList={author[currentAuthorId][language].works}
              />
              <AuthorSlider gallery={author[currentAuthorId].gallery} />
            </div>
          </>
        )
      )}
    </Container>
  );
};

export default Author;
