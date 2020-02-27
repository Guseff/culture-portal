import React from 'react';

interface IAuthorWorksItemList {
  endAt: string | null;
  startAt: string;
  genre: string;
  title: string;
}

interface IAuthorWorksItemProps {
  work: IAuthorWorksItemList;
  index: number;
}

const AuthorWorksItem: React.FC<IAuthorWorksItemProps> = ({ work, index }) => {
  return (
    <tr key={index}>
      <td>{work.endAt ? `${work.startAt}-${work.endAt}` : work.startAt}</td>
      <td>{work.genre}</td>
      <td>{work.title}</td>
    </tr>
  );
};

export default AuthorWorksItem;
