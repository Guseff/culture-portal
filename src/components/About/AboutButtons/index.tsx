import './index.scss';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutButtons: React.FC = () => {
  return (
    <section className="about__button">
      <Button variant="outline-secondary" as={Link} to="/worklog">
        Worklog
      </Button>
      <Button variant="outline-secondary" as={Link} to="/styleguide">
        StyleGuide
      </Button>
    </section>
  );
};

export default AboutButtons;
