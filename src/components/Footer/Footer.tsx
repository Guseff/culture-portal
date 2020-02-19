import * as React from 'react';
import './Footer.module.css';

import { Navbar, Alert, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Alert variant="primary" className="footer fixed-bottom">
      <Navbar className="footer_item">
        <Nav.Link as={Link} to="/author">
          Тут будут ссылки на наши контакты
        </Nav.Link>
        <Nav.Link as={Link} to="/author">
          О нас
        </Nav.Link>
      </Navbar>
    </Alert>
  );
};

export default Footer;
