import * as React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

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
          <Nav.Link as={Link} to="/author">
            О нас
          </Nav.Link>
          <div className="dropdown">
            <button
              className="btn btn-info dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true">
              Языки
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">ru</a>
              </li>
              <li>
                <a href="#">be</a>
              </li>
              <li>
                <a href="#">eng</a>
              </li>
            </ul>
          </div>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
