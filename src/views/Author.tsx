import * as React from 'react';
import { connect } from 'react-redux';

import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface AuthorProps {
  pageFromPath?: string;
}

const Author: React.FC<AuthorProps> = ({ pageFromPath }) => {
  return (
    <Container>
      <h3>Author Page</h3>
      <h4>{`Page number ${pageFromPath.slice(-1)}`}</h4>
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
