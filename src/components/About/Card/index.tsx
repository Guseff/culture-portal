import './index.scss';
import * as React from 'react';

import { Card } from 'react-bootstrap';

const Cards = () => {
  return (
    <Card>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>role</Card.Text>
        <Card.Text>git</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
