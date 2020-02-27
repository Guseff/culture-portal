import './index.scss';

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RedirectButton from '../../RedirectButton';

interface IAuthorListCardsProps {
  authorId: string;
  author: object;
  language: string;
}

const AuthorListCardItem: React.FC<IAuthorListCardsProps> = ({
  authorId,
  author,
  language,
}) => {
  const { t } = useTranslation();

  return (
    <li className="col mb-4">
      <Card>
        <Link to={`/author/${authorId}`}>
          <Card.Img
            className="shadow rounded"
            src={author[authorId].photo}
            alt={author[authorId][language].name}
          />
        </Link>
        <Card.Body>
          <Card.Title>{author[authorId][language].name}</Card.Title>
          <Card.Text>{author[authorId][language].birthCity}</Card.Text>
          <RedirectButton link={`/author/${authorId}`} text={t('learnMore')} />
        </Card.Body>
      </Card>
    </li>
  );
};

export default AuthorListCardItem;
