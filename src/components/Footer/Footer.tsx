import * as React from 'react';

import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark">
        <Container fluid={true} className="bg-primary">
          <footer>
            <address>
              <a>Тут будут ссылки на наши контакты</a>
              <Nav.Link as={Link} to="/author">
                О нас
              </Nav.Link>
            </address>
          </footer>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
