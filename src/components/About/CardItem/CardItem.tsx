import './index.scss';

import React from 'react';
import { Card } from 'react-bootstrap';
import gitIcon from '../../../assets/images/icon-git.png';

interface ICardItemProps {
  currentDeveloperId: string;
  developer: object;
  language: string;
}

const CardItem: React.FC<ICardItemProps> = ({
  currentDeveloperId,
  developer,
  language,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={developer[currentDeveloperId].photo} />
      <Card.Body>
        <Card.Title>{developer[currentDeveloperId][language].name}</Card.Title>
        <Card.Link
          href={developer[currentDeveloperId][language].link}
          className="card__link"
          target="_blank"
        >
          <Card.Img src={gitIcon} />
          <Card.Text>
            {developer[currentDeveloperId][language].link.replace(
              'https://github.com/',
              ''
            )}
          </Card.Text>
        </Card.Link>
        <Card.Text>{developer[currentDeveloperId][language].role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
