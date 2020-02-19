import React from 'react';
import writersData from '../data/writersData';
import  { AuthorListCards } from '../components/AuthorList/AuthorListCards/AuthorListCards';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorList:React.FC = () => {

    return (
      <Container>
        <Nav.Link as={Link} to="/author">
          Author Page
        </Nav.Link>
        <AuthorListCards data={writersData} />
      </Container>
    );
}

export default AuthorList;
