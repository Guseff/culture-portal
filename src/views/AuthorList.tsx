import React from 'react';
import AuthorListApp from '../components/AuthorList/index';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AuthorList: React.FC = () => {
  const authorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const { language } = settingsState;
  const { byId, author, pending } = authorState;

  if (pending) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <Container className="content">
      <AuthorListApp data={byId} author={author} lang={language} />
    </Container>
  );
};

export default AuthorList;
