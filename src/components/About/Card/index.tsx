import './index.scss';
import * as React from 'react';
import git from '../../../assets/images/icon-git.png';

import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface IDevelopersCardsProps {
  list: string[];
  developer: object;
  lang: string;
}

const CardItem: React.FC<IDevelopersCardsProps> = ({
  list,
  developer,
  lang,
}) => {
  const { t } = useTranslation();
  return list.length ? (
    <div className="about__cards">
      {list.map((i: string) => (
        <Card key={i}>
          <Card.Img variant="top" src={developer[i].photo} />
          <Card.Body>
            <Card.Title>{developer[i][lang].name}</Card.Title>
            <div className="card__link">
              <Card.Img src={git} />
              <Card.Link href={developer[i][lang].link}>
                {developer[i][lang].link.replace('https://github.com/', '')}
              </Card.Link>
            </div>
            <Card.Text>{developer[i][lang].role}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  ) : (
    <div className="no-result">
      <span>{t('nothingHere')}</span>
    </div>
  );
};

export default CardItem;
