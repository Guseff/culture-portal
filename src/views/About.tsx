import * as React from 'react';
import '../components/About/index.scss';

import { Container, Nav, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Container className="content">
        <section className="about">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Роль</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </section>
        <Nav.Link as={Link} to="/worklog">
          Worklog
        </Nav.Link>
        <Nav.Link as={Link} to="/styleguide">
          StyleGuide
        </Nav.Link>
      </Container>
    );
  }
}

export default About;
