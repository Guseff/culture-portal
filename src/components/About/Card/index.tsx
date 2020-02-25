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
        <Card.Link href={developer.link} className="card__link" target="_blank">
          <Card.Img src={git} />
          <Card.Text>{itemLink}</Card.Text>
        </Card.Link>
        <Card.Text>{developer.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
