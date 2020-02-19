import * as React from 'react';
import './Footer.css';

import { Navbar, Alert, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Alert variant="primary" className="footer">
      <Navbar className="footer_item">
        <Nav.Link as={Link} to="/author">
          Culture Portal by RSS team #14
        </Nav.Link>
        <Nav.Link as={Link} to="/author">
          О нас
        </Nav.Link>
      </Navbar>
    </Alert>
  );
};

export default Footer;
