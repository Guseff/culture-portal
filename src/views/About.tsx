import '../components/About/index.scss';
import * as React from 'react';
import CardItem from '../components/About/Card/index';
import developers from '../data/developersData';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Container className="content">
        <section className="about">
          {developers.map(developer => (
            <CardItem key={developer.id} developer={developer} />
          ))}
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
