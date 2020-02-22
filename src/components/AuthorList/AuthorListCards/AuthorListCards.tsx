import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AuthorListCards.scss';

interface AuthorListCardsProps {
  list: object[]
}

const AuthorListCards: React.FC<AuthorListCardsProps> = ({ list }) => {
  return (
          <ul className="row row-cols-3 list-unstyled list">        
              {list.map((item: any) => (  
                <li className="col mb-4" key={item.id}>       
                <Card key={item.id}>
                <Card.Img className="shadow rounded" src={item.image} alt={item.name}/>
                <Card.Body className="photo">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.birthCity}
                  </Card.Text>
                  <Button variant="outline-info">Узнать больше</Button>
                </Card.Body>
              </Card>  
              </li>    
              ))}          
          </ul>
        )        
}

export { AuthorListCards };







