import logo from '../../assets/images/logo.png';
import './index.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import SelectLanguage from '../SelectLanguage';

const Header = () => {
  return (
    <Container className="header" fluid>
      <Navbar>
        <Navbar.Brand className="header_logo" href="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
          <h1>Belarusian Writers</h1>
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
        <SelectLanguage />
      </Navbar>
    </Container>
  );
};

export default Header;
