import logo from '../../assets/images/logo.png';
import './index.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Alert, Image } from 'react-bootstrap';

import SelectLanguage from '../SelectLanguage';

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
        <SelectLanguage />
      </Navbar>
    </Alert>
  );
};

export default Header;
