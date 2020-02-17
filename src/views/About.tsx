import * as React from 'react';
import { Container } from 'react-bootstrap';

class About extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Container>
        <h3>About</h3>
      </Container>
    );
  }
}

export default About;
