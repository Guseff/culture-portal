import * as React from 'react';
import { Container } from 'react-bootstrap';

class Author extends React.Component {
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
        <h3>Author Page</h3>
      </Container>
    );
  }
}

export default Author;
