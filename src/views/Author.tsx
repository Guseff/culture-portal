import * as React from 'react';
import { Container } from 'react-bootstrap';
import AuthorMap from '../components/AuthorPage/AuthorMap/index';

class Author extends React.Component {
  title: string;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = 'Mr.';
    this.name = 'Ronnie';
  }

  render() {
    const coords: number[] = [27.567444, 53.893009];
    return (
      <Container>
        <h3>Author Page</h3>
        <AuthorMap location={coords} />
      </Container>
    );
  }
}

export default Author;
