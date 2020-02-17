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
        <main>
          <section className="">
            <h1>Портал о писателях</h1>
            <p>информация о портале</p>
          </section>
          <section className="">
            <h2>Имя писателя</h2>
            <img src="" alt="фото писателя" />
            <h3>годы жизни</h3>
            <p>Информация о писателе (коротко)</p>
            <button>Узнать больше</button>
          </section>
        </main>
      </Container>
    );
  }
}

export default Main;
