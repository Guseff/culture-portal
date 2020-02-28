import './index.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface IAuthorInfoProps {
  name: string;
  years: string;
  birthCity: string;
  description: string;
}

const AuthorInfo: React.FC<IAuthorInfoProps> = ({
  name,
  years,
  birthCity,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="title">{name}</h3>
      <p className="text1">
        {t('born')} {years} {t('inTheTown')} {birthCity}.
      </p>
      <p className="text2">{description}</p>
    </>
  );
};

export default AuthorInfo;
