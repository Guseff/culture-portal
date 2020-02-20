import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Author extends React.Component {
  pageToGo: number;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.pageToGo = 3;
    this.name = 'Ronnie';
  }

  render() {
    return (
      <Container>
        <h3>Author Page</h3>
        <Nav.Link as={Link} to={'/list'}>
          Back to Author List
        </Nav.Link>
      </Container>
    );
  }
}

export default Author;
