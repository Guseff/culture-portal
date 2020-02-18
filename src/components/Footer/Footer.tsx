import * as React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" bg-primary fixed-bottom">
      <Navbar color="dark">
        <Container fluid={true}>
          <address>
            <a>Тут будут ссылки на наши контакты</a>
            <Nav.Link as={Link} to="/author">
              О нас
            </Nav.Link>
          </address>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
