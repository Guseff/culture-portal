import React from 'react';
import writersData from '../data/writersData';
import AuthorListApp from '../components/AuthorList/index';
import { Container } from 'react-bootstrap';

const AuthorList:React.FC = () => {

  return (
    <Container className="content">
      <AuthorListApp data={writersData}/>
    </Container>
  );
}

export default AuthorList;


