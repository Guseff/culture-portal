import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import AuthorPage from '../components/Author/index';
import { Link } from 'react-router-dom';

class Author extends React.Component {
  title: string;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = 'Mr.';
    this.name = 'Ronnie';
  }

  render() {
    return (
      <Container>
        <h3>Author Page</h3>
        <Nav.Link as={Link} to="/list">
          Back to Author List
        </Nav.Link>
        <AuthorPage id={1} />
      </Container>
    );
  }
}

export default Author;
