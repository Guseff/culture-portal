import '../components/Author/';
import * as React from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data/writersData';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  ModalVideoWindow,
} from '../components/Author/';

interface AuthorProps {
  id: number;
}

interface AuthorState {}

class Author extends React.Component<AuthorProps, AuthorState> {
  render() {
    const id = 2; // have to change to data from CMS
    const idVideo = 'HGvYNDVLqoI'; // have to change to data from CMS

    return (
      <Container className="content">
        <Nav.Link as={Link} to="/list">
          Back to Author List
        </Nav.Link>
        <Row>
          <Col md="auto" className="Author-page--photo-col">
            <AuthorPhoto image={data[id].image} name={data[id].name} />
            <ModalVideoWindow videoId={idVideo} />
          </Col>
          <Col sm="6">
            <AuthorInfo
              name={data[id].name}
              years={data[id].years}
              birthCity={data[id].birthCity}
              description={data[id].description}
            />
          </Col>
          <Col md="auto">
            <AuthorMap activityPlace={data[id].location} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Author;
