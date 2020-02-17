import * as React from 'react';
import { Container } from 'react-bootstrap';

class Main extends React.Component {
  title: string;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = 'Mr.';
    this.name = 'Ronnie';
  }

  render() {
    return (
      <Container>
        <h3>Hello, World!</h3>
      </Container>
    );
  }
}

export default Main;
