import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Author } from '../components/Author/Author';
import { Link, Route, useLocation } from 'react-router-dom';

export const AuthorList = () => {
  const { pathname } = useLocation();
  const authorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const { language: locale } = settingsState;
  const { byId, author, pending } = authorState;

  if (pending) {
    return <div>Spinner!!!</div>;
  }

  return (
    <Container className="content">
      <h3>Author List Page</h3>
      {byId.length && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          {pathname === '/list' ? (
            <div style={{ width: '25%' }}>
              {byId.map((el: string) => {
                return (
                  <div key={el}>
                    <Link to={`/author/${el}`}>{author[el][locale].name}</Link>
                  </div>
                );
              })}
            </div>
          ) : null}
          <div style={{ width: '75%' }}>
            {byId.map((el: string) => {
              return (
                <div key={el}>
                  <Route path={`/author/${el}`}>
                    <Author
                      author={{
                        ...author[el][locale],
                        photo: author[el].photo,
                      }}
                    />
                  </Route>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};
