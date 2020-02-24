import './index.scss';
import * as React from 'react';
import git from '../../../assets/images/icon-git.png';

import { Card } from 'react-bootstrap';

interface DevelopersCardsProps {
  developer: any;
}

const CardItem: React.FC<DevelopersCardsProps> = ({ developer }) => {
  let itemLink = developer.link.replace('https://github.com/', '');

  return (
    <Card>
      <Card.Img variant="top" src={developer.photo} />
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <div className="card__link">
          <Card.Img src={git} />
          <Card.Link href={developer.link}>{itemLink}</Card.Link>
        </div>
        <Card.Text>{developer.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
