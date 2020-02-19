import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Main extends React.Component {
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
        <h3>Author List</h3>
        <Nav.Link as={Link} to="/author">
          Author Page
        </Nav.Link>
      </Container>
    );
  }
}

export default Main;
