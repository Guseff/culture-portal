import React from 'react';

export const ExampleItem = ({ author }: any) => {
  return (
    <div className="content">
      <div>{author.name}</div>
      <div>{author.description}</div>
    </div>
  );
};
