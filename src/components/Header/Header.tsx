import * as React from 'react';
import logo from '../../assets/images/logo.png';
import './index.scss';

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Alert, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Alert variant="primary">
      <Navbar className="header">
        <Navbar.Brand className="header_logo" href="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            На главную
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            Писатели
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            О нас
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#ru">ru</NavDropdown.Item>
            <NavDropdown.Item href="#eng">eng</NavDropdown.Item>
            <NavDropdown.Item href="#be">be</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Alert>
  );
};

export default Header;
