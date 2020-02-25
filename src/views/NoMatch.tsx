import React from 'react';
import { Container } from 'react-bootstrap';
import { NoMatchImage, NoMatchInfo } from '../components/NoMatch';

const NoMatch: React.FC = () => {
  return (
    <Container className="content">
      <NoMatchImage />
      <NoMatchInfo />
    </Container>
  );
};

export default NoMatch;
