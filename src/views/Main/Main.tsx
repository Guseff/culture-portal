import * as React from 'react';
import { Container } from 'react-bootstrap';
import LangOutputTest from '../../components/LangOutputTest';

class Main extends React.Component {
  title: string;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = '';
    this.name = '';
  }

  render() {
    return (
      <Container>
        <h3>Hello, World!</h3>
        <LangOutputTest />
      </Container>
    );
  }
}

export default Main;
