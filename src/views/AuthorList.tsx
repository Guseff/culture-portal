import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  pageNum: number;

  constructor(props: Readonly<{}>) {
    super(props);
    this.pageNum = 3;
  }

  render() {
    return (
      <Container>
        <h3>Author List</h3>
        <Nav.Link as={Link} to={`/author/${this.pageNum}`}>
          Author Page
        </Nav.Link>
      </Container>
    );
  }
}

export default Main;
