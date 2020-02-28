import React from 'react';
import { Container } from 'react-bootstrap';
import StyleGuideOverview from '../components/StyleGuide/StyleGuideOverview';

const StyleGuide = () => {
  return (
    <Container className="content content-styleguide">
      <StyleGuideOverview />
    </Container>
  );
};

export default StyleGuide;
