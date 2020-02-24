import '../components/Author/';
import * as React from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data/writersData';
import {
  AuthorPhoto,
  AuthorMap,
  AuthorInfo,
  AuthorFrame,
  AuthorTimeline,
} from '../components/Author/';

class Author extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    const id = 2;
    return (
      <Container className="content">
        <h3>Author Page</h3>
        <Nav.Link as={Link} to="/list">
          Back to Author List
        </Nav.Link>
        <Row>
          <Col md="auto">
            <AuthorPhoto image={data[id].image} name={data[id].name} />
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
        <Row>
          <Col md={{ span: 12, offset: 3 }}>
            <AuthorFrame videoUrl={data[id].video} />
          </Col>
        </Row>
        <AuthorTimeline id={1} />
      </Container>
    );
  }
}

export default Author;
