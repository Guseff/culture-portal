import React from 'react';
import AuthorListApp from '../components/AuthorList';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AuthorList: React.FC = () => {
  const authorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const { language } = settingsState;
  const { byId, author, pending } = authorState;

  return (
    <Container className="content">
      {pending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <AuthorListApp authorIds={byId} author={author} language={language} />
      )}
    </Container>
  );
};

export default AuthorList;
