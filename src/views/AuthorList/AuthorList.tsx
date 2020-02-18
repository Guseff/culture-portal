import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import writersData from '../../data/writersData';
import  { AuthorListCards } from '../../components/AuthorList/AuthorListCards/AuthorListCards';

const AuthorList:React.FC = () => {

  return (
    <Container>
      <h3>Author List</h3>
      <AuthorListCards data={writersData} />
    </Container>
  );
}

export default AuthorList;
