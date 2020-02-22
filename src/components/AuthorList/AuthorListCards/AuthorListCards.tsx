import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthorListCards.scss';

interface AuthorListCardsProps {
  list: object[]
}

const AuthorListCards: React.FC<AuthorListCardsProps> = ({ list }) => {

  return (
      list.length
      ? <ul className="row row-cols-3 list-unstyled list">        
          {list.map((item: any) => (  
            <li className="col mb-4" key={item.id}>       
              <Card key={item.id}>
                <Nav.Link as={Link} to="/author">
                  <Card.Img className="shadow rounded" src={item.image} alt={item.name}/>
                </Nav.Link>
                <Card.Body className="photo">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.birthCity}
                  </Card.Text>
                  <Nav.Link as={Link} to="/author">
                    <Button variant="outline-info">Узнать больше</Button>
                  </Nav.Link>
                </Card.Body>
              </Card>  
            </li>    
          ))}          
        </ul>
      : <div className="no-result">
          <span>Ничего не найдено</span>
        </div>
  )        
}

export { AuthorListCards };







