import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ExampleItem } from './ExampleItem';

export const ExampleList = () => {
  const authorState = useSelector((store: any) => store.author);
  const { byId, author, pending } = authorState;

  const [locale, setLocale] = useState('ru');

  if (pending) {
    return <div>Spinner!!!</div>;
  }

  return (
    <>
      <div>
        <span style={{ padding: '10px' }} onClick={() => setLocale('ru')}>
          Ru
        </span>
        <span style={{ padding: '10px' }} onClick={() => setLocale('en')}>
          En
        </span>
        <span style={{ padding: '10px' }} onClick={() => setLocale('be')}>
          Be
        </span>
      </div>
      {byId.length && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <div style={{ width: '25%' }}>
            {byId.map((el: string) => {
              return (
                <div key={el}>
                  <Link to={`/ex/${el}`}>{author[el][locale].name}</Link>
                </div>
              );
            })}
          </div>
          <div style={{ width: '75%' }}>
            {byId.map((el: string) => {
              return (
                <div key={el}>
                  <Route path={`/ex/${el}`}>
                    <ExampleItem author={author[el][locale]} authorId={el} />
                  </Route>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
