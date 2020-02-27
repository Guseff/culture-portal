import './index.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthorListCardItem from '../AuthorListCardItem';

interface IAuthorListCardsProps {
  authorList: string[];
  author: object;
  language: string;
}

const AuthorListCardList: React.FC<IAuthorListCardsProps> = ({
  authorList,
  author,
  language,
}) => {
  const { t } = useTranslation();

  return authorList.length ? (
    <ul className="row row-cols-3 list-unstyled list">
      {authorList.map((authorId: string) => (
        <AuthorListCardItem
          key={authorId}
          authorId={authorId}
          author={author}
          language={language}
        />
      ))}
    </ul>
  ) : (
    <div className="no-result">
      <span>{t('nothingHere')}</span>
    </div>
  );
};

export default AuthorListCardList;
