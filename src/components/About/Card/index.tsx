import './index.scss';
import * as React from 'react';

import { Card } from 'react-bootstrap';
import developers from '../../../data/developersData';

interface DevelopersCardsProps {
  developer: object[]
}

const Cards: React.FC<DevelopersCardsProps> = ({ developer }) => {
  return (
    { developer.map((i) => (
      <Card>
        <Card.Img variant="top" src={i.image} />
        <Card.Body>
          <Card.Title>{i.name}</Card.Title>
          <Card.Text>{i.link}</Card.Text>
          <Card.Text>{i.role}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  );
};

export default Cards;
