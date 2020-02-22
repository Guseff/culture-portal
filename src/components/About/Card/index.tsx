import './index.scss';
import * as React from 'react';

import { Card } from 'react-bootstrap';

interface DevelopersCardsProps {
  developer: any;
}

const Cards: React.FC<DevelopersCardsProps> = ({ developer }) => {
  const devData = developer.map(i => {
    return (
      <Card key={i.id}>
        <Card.Img variant="top" src={i.photo} />
        <Card.Body>
          <Card.Title>{i.name}</Card.Title>
          <Card.Text>{i.link}</Card.Text>
          <Card.Text>{i.role}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <section className="about">{devData}</section>;
};

export default Cards;
