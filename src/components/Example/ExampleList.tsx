import React from 'react';
import { useLocation, useRouteMatch, Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ExampleItem } from './ExampleItem';

const locale = 'ru';

export const ExampleList = () => {
  const currentPage = useLocation();
  // const currentMatch = useRouteMatch();

  // console.log('---------------');
  // console.log('currentPage:', currentPage);
  // console.log('currentMatch:', currentMatch);

  const authorState = useSelector((store: any) => store.author);
  const { byId, author, pending } = authorState;

  if (pending) {
    return <div>Spinner!!!</div>;
  }

  return (
    <div>
      {byId.length &&
        byId.map((el: string) => {
          const myPath = `${currentPage.pathname}/:${el}`;
          console.log('myPath:', myPath);

          return (
            <div key={el}>
              <Link to={`${currentPage.pathname}:${el}`}>
                {author[el][locale].name}
              </Link>
              <Route
                // exact
                path={myPath}
                component={ExampleItem}
              />
              {/* <ExampleItem author={author[el][locale]} /> */}
              {/* </Route> */}
            </div>
          );
        })}
    </div>
  );
};
