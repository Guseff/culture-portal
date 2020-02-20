import * as React from 'react';
import '../components/About/index.scss';

import { Container, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Container className="content">
        <section className="about">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>role</Card.Text>
              <Card.Text>git</Card.Text>
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
