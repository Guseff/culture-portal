import React from 'react';

export const ExampleItem = ({ author }: any) => {
  return (
    <div>
      <div>{author.name}</div>
      <div>{author.description}</div>
    </div>
  );
};
