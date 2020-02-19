import './index.scss';

import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Navbar className="footer_item">
        <Navbar.Text>Culture Portal by RSS team #14</Navbar.Text>
        <Nav.Link as={Link} to="/about">
          О нас
        </Nav.Link>
      </Navbar>
    </Container>
  );
};

export default Footer;
