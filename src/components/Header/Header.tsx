import * as React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header className=" bg-primary">
      <Navbar>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            На главную
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            Писатели
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            О нас
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Языки
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ru</Dropdown.Item>
              <Dropdown.Item href="#/action-2">be</Dropdown.Item>
              <Dropdown.Item href="#/action-3">eng</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
