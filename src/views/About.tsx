import '../components/About/index.scss';
import * as React from 'react';
import CardItem from '../components/About/Card/index';
import AboutButton from '../components/About/AboutButtons/index';
import { useSelector } from 'react-redux';

import { Container, Spinner } from 'react-bootstrap';

const About: React.FC = () => {
  const developerState = useSelector((store: any) => store.developer);
  const settingsState = useSelector((store: any) => store.settings);
  const { language } = settingsState;
  const { byId, developer, pending } = developerState;

  if (pending) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <Container className="content">
      <AboutButton />
      <section>
        <CardItem list={byId} developer={developer} lang={language} />
      </section>
    </Container>
  );
};

export default About;
