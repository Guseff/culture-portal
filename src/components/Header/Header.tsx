import * as React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          На главную
        </Nav.Link>
        <Nav.Link as={Link} to="/list">
          Писатели
        </Nav.Link>
        <Nav.Link as={Link} to="/author">
          О нас
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
