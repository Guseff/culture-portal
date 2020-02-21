import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getNumberFromRoute } from '../utils';

import { AppState } from '../types/';
import data from '../data/writersData.json';

interface AuthorProps {
  pageFromPath?: string;
}

const Author: React.FC<AuthorProps> = ({ pageFromPath }) => {
  const index = getNumberFromRoute(pageFromPath);
  const writer = data[index];
  return (
    <Container>
      <h3>Author Page</h3>
      <h4>{`Page number ${index}`}</h4>
      <h3>{writer.name}</h3>
      <Nav.Link as={Link} to={'/list'}>
        Back to Author List
      </Nav.Link>
    </Container>
  );
};

const mapStateToProps = (state: AppState): AuthorProps => {
  return {
    pageFromPath: state.router.location.pathname,
  };
};

export default connect(mapStateToProps)(Author);
