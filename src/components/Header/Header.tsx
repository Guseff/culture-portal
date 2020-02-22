import logo from '../../assets/images/logo.png';
import './index.scss';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import SelectLanguage from '../SelectLanguage';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Container className="header" fluid>
      <Navbar>
        <Navbar.Brand className="header_logo" as={Link} to="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" disabled={pathname === '/'}>
            На главную
          </Nav.Link>
          <Nav.Link as={Link} to="/list" disabled={pathname === '/list'}>
            Писатели
          </Nav.Link>
          <Nav.Link as={Link} to="/about" disabled={pathname === '/about'}>
            О нас
          </Nav.Link>
        </Nav>
        <SelectLanguage />
      </Navbar>
    </Container>
  );
};

export default Header;
