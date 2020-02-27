import './index.scss';

import React from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';

interface ICardListProps {
  developerIds: string[];
  developer: object;
  language: string;
}

const CardList: React.FC<ICardListProps> = ({
  developerIds,
  developer,
  language,
}) => {
  const { t } = useTranslation();

  return developerIds.length ? (
    <div className="about__cards">
      {developerIds.map((currentDeveloperId: string) => (
        <CardItem
          key={currentDeveloperId}
          currentDeveloperId={currentDeveloperId}
          developer={developer}
          language={language}
        />
      ))}
    </div>
  ) : (
    <div className="no-result">
      <span>{t('noData')}</span>
    </div>
  );
};

export default CardList;
