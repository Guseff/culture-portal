import './index.scss';

import * as React from 'react';
import { Container } from 'react-bootstrap';
// import { connect } from 'react-redux';

import data from '../../data/writersData';
// import { AppState } from '../../types';

interface AuthorProps {
  id: number;
}

const AuthorListTest: React.FC<AuthorProps> = ({ id }) => {
  return (
    <Container>
      <h3>{data[id].name}</h3>
      <p>{data[id].description}</p>
    </Container>
  );
};

// const mapStateToProps = (state: AppState): AuthorProps => {
//   return { id: state.settings.language };
// };

export default AuthorListTest;
