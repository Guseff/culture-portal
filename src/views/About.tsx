import '../components/About/index.scss';
import * as React from 'react';
import Cards from '../components/About/Card/index';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Container className="content">
        <section className="about">
          <Cards />
        </section>
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
