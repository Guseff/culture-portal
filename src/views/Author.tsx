import '../components/Author/';
import React from 'react';
import { Container, Spinner, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  AuthorFrame,
  AuthorTimeline,
} from '../components/Author/';
import { useSelector } from 'react-redux';

const Author: React.FC = () => {
  const authorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const id = useSelector((store: any) =>
    store.router.location.pathname.slice(8)
  );

  const { byId, author, pending } = authorState;
  const { language } = settingsState;

  if (pending) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <Container className="content">
      <h3>Author Page</h3>
      <Nav.Link as={Link} to="/list">
        Back to Author List
      </Nav.Link>
      {byId.length && (
        <React.Fragment>
          <Row>
            <Col md="auto">
              <AuthorPhoto
                name={author[id][language].name}
                photo={author[id].photo}
                authorId={1}
              />
            </Col>
            <Col sm="6">
              <AuthorInfo
                name={author[id][language].name}
                years={author[id][language].years}
                birthCity={author[id][language].birthCity}
                description={author[id][language].description}
              />
            </Col>
            <Col md="auto">
              <AuthorMap
                longitude={author[id][language].location.longitude}
                latitude={author[id][language].location.latitude}
              />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 3 }}>
              <AuthorFrame videoUrl={author[id][language].video} />
            </Col>
          </Row>
          <AuthorTimeline id={1} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default Author;
