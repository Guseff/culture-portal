import './index.scss';

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IAuthorListCardsProps {
  list: string[];
  author: object;
  language: string;
}

const AuthorListCards: React.FC<IAuthorListCardsProps> = ({
  list,
  author,
  language,
}) => {
  const { t } = useTranslation();

  return list.length ? (
    <ul className="row row-cols-3 list-unstyled list">
      {list.map((item: string) => (
        <li className="col mb-4" key={item}>
          <Card>
            <Link to={`/author/${item}`}>
              <Card.Img
                className="shadow rounded"
                src={author[item].photo}
                alt={author[item][language].name}
              />
            </Link>
            <Card.Body>
              <Card.Title>{author[item][language].name}</Card.Title>
              <Card.Text>{author[item][language].birthCity}</Card.Text>
              <Link to={`/author/${item}`}>
                <Button variant="outline-secondary">{t('learnMore')}</Button>
              </Link>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  ) : (
    <div className="no-result">
      <span>{t('nothingHere')}</span>
    </div>
  );
};

export default AuthorListCards;
