import * as React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SelectTest from '../SelectTest';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Logo
      </Navbar.Brand>
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
      <SelectTest />
    </Navbar>
  );
};

export default Header;
