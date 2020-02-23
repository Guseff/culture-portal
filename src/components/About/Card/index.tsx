import './index.scss';
import * as React from 'react';

import { Card } from 'react-bootstrap';

interface DevelopersCardsProps {
  developer: any;
}

const CardItem: React.FC<DevelopersCardsProps> = ({ developer }) => {
  return (
    <Card>
      <Card.Img variant="top" src={developer.photo} />
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Text>{developer.link}</Card.Text>
        <Card.Text>{developer.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
