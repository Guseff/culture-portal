import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <tr key={index}>
      <td data-work={t('date')}>
        {work.endAt ? `${work.startAt}-${work.endAt}` : work.startAt}
      </td>
      <td data-work={t('genre')}>{work.genre}</td>
      <td data-work={t('workTitle')}>{work.title}</td>
    </tr>
  );
};

export default AuthorWorksItem;
