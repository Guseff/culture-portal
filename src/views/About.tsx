import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Container className="main-content">
        <h3>About</h3>
        <Nav.Link as={Link} to="/worklog">
          Worklog
        </Nav.Link>
        <Nav.Link as={Link} to="/styleguide">
          StyleGuide
        </Nav.Link>
      </Container>
    );
  }
}

export default About;
