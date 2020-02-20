import * as React from 'react';
import { connect } from 'react-redux';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AppState } from '../types';

interface AuthorProps {
  pageNum?: number;
}

const Author: React.FC<AuthorProps> = ({ pageNum }) => {
  return (
    <Container>
      <h3>Author Page</h3>
      <h4>{`Page number ${pageNum}`}</h4>
      <Nav.Link as={Link} to={'/list'}>
        Back to Author List
      </Nav.Link>
    </Container>
  );
};

const mapStateToProps = (state: AppState): AuthorProps => {
  return { pageNum: state.pages.pageNum };
};

export default connect(mapStateToProps)(Author);
