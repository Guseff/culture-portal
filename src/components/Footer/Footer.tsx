import './index.scss';

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container className="footer" fluid>
      <Navbar className="footer_item">
        <Navbar.Text>
          <span className="copyright">&copy;&nbsp;</span>
          2020 {t('signature')} RSS Team
        </Navbar.Text>
        <Nav.Link as={Link} to="/about">
          {t('about')}
        </Nav.Link>
      </Navbar>
    </Container>
  );
};

export default Footer;
