import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthorListCards.scss';

interface AuthorListCardsProps {
  list: string[];
  author: object;
  lang: string;
}

const AuthorListCards: React.FC<AuthorListCardsProps> = ({
  list,
  author,
  lang,
}) => {
  return list.length ? (
    <ul className="row row-cols-3 list-unstyled list">
      {list.map((item: string) => (
        <li className="col mb-4" key={item}>
          <Card>
            <Link to={`/author/${item}`}>
              <Card.Img
                className="shadow rounded"
                src={author[item].photo}
                alt={author[item][lang].name}
              />
            </Link>
            <Card.Body>
              <Card.Title>{author[item][lang].name}</Card.Title>
              <Card.Text>{author[item][lang].birthCity}</Card.Text>
              <Link to={`/author/${item}`}>
                <Button variant="outline-info">Узнать больше</Button>
              </Link>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  ) : (
    <div className="no-result">
      <span>Ничего не найдено</span>
    </div>
  );
};

export { AuthorListCards };
