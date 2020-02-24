import '../components/Author/';
import React, { useState } from 'react';
import { Container, Spinner, Nav, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  AuthorFrame,
} from '../components/Author/';
import { useSelector } from 'react-redux';

interface RouteParams {
  id: string;
}

const Author: React.FC = () => {
  const params = useParams<RouteParams>();
  const authorState = useSelector((store: any) => store.author);
  const id = useSelector((store: any) => store.router.location.pathname);
  const { byId, author, pending } = authorState;
  const settingsState = useSelector((store: any) => store.settings);
  const { language } = settingsState;

  if (pending) {
    return <Spinner animation="grow" variant="info" />;
  }
  console.log(id);

  return (
    <Container className="content">
      <h3>Author Page</h3>
      <Nav.Link as={Link} to="/list">
        Back to Author List
      </Nav.Link>
      {/* {byId.length && (
        <React.Fragment>
          <Row>
            <Col md="auto">
              <AuthorPhoto
                name={author[id][language].name}
                photo={author[id].photo}
                authorId={1}
              />
              ;
            </Col>
            <Col sm="6">
              <AuthorInfo
                name={author[id][language].name}
                years={author[id][language].years}
                birthCity={author[id][language].birthCity}
                description={author[id][language].description}
              />
              ;
            </Col>
            <Col md="auto">
              <AuthorMap activityPlace={author[id][language].location} />;
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 12, offset: 3 }}>
              <AuthorFrame videoUrl={author[id][language].video} />;
            </Col>
          </Row>
        </React.Fragment>
      )} */}
    </Container>
  );
};

export default Author;
