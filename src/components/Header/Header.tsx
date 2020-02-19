import './index.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container className="header" fluid>
      <Navbar className="header_item">
        <Navbar.Brand className="header_logo" href="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
          <Navbar.Text className="header_logo__text">
            Belarussian Writers
          </Navbar.Text>
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
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#ru">ru</NavDropdown.Item>
            <NavDropdown.Item href="#eng">eng</NavDropdown.Item>
            <NavDropdown.Item href="#be">be</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
