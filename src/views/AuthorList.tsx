import React from 'react';
import writersData from '../data/writersData';
import AuthorListApp from '../components/AuthorList/index';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorList:React.FC = () => {

  return (
    <Container>
      <Nav.Link as={Link} to="/author">
        Author Page
      </Nav.Link>
      <AuthorListApp data={writersData}/>
    </Container>
  );
}

export default AuthorList;


