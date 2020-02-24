import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface AuthorInfoProps {
  name: string;
  years: string;
  birthCity: string;
  description: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  name,
  years,
  birthCity,
  description,
}) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <p>
        {t('born')} {years} {t('inTheTown')} {birthCity}.
      </p>
      <p>{description}</p>
    </React.Fragment>
  );
};

export default AuthorInfo;
