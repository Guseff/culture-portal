import * as React from 'react';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorList: React.FC<{}> = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7]; // TODO get array from data
  return (
    <Container>
      <h3>Author List</h3>
      {pages.map(x => {
        return (
          <Nav.Link key={x} as={Link} to={`/author/${x}`}>
            {`Author Page #${x}`}
          </Nav.Link>
        );
      })}
    </Container>
  );
};

export default AuthorList;
