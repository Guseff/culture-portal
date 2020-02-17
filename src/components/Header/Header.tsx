import * as React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/list">
          Author List
        </Nav.Link>
        <Nav.Link as={Link} to="/author">
          Author
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/worklog">
          Work Log
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
