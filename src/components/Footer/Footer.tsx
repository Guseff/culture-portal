import './index.scss';

import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container className="footer" fluid>
      <Navbar className="footer_item">
        <Navbar.Text>Culture Portal by RSS team #14</Navbar.Text>
        <Nav.Link as={Link} to="/about">
          {t('О нас')}
        </Nav.Link>
        <Nav.Link as={Link} to="/ex">
          Example
        </Nav.Link>
      </Navbar>
    </Container>
  );
};

export default Footer;
