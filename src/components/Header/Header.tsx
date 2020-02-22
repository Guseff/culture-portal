import logo from '../../assets/images/logo.png';
import './index.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Alert, Image } from 'react-bootstrap';

import SelectLanguage from '../SelectLanguage';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Alert variant="primary">
      <Navbar className="header">
        <Navbar.Brand className="header_logo" href="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            {t('На главную')}
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            {t('Писатели')}
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            {t('О нас')}
          </Nav.Link>
        </Nav>
        <SelectLanguage />
      </Navbar>
    </Alert>
  );
};

export default Header;
