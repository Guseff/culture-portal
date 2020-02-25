import '../components/About/index.scss';
import * as React from 'react';
import CardItem from '../components/About/Card/index';
import AboutButton from '../components/About/AboutButtons/index';
import developers from '../data/developersData';

import { Container } from 'react-bootstrap';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Container className="content">
        <AboutButton />
        <section className="about__cards">
          {developers.map(developer => (
            <CardItem key={developer.id} developer={developer} />
          ))}
        </section>
      </Container>
    );
  }
}

export default About;
