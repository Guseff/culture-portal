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
            <h1>Культурный портал о писателях Беларуси</h1>
            <p>
              Культурный портал о писателях Беларуси — сборник статей о
              выдающихся творческих личностях с их подробным описанием, включая
              годы жизни, фотографии, биографии в виде временной шкалы, списки
              авторских работ, видеозаписи, а также карты с обозначением их
              основной деятельности. Вы можете выбрать автора из списка и узнать
              о нём подробнее. Кроме того, каждый день меняется писатель в
              секции «Писатель дня». В графе «О нас» Вы сможете узнать о
              разработчиках сайта, увидеть ход рабочего процесса и посмотреть на
              шаблон стилей сайта.
            </p>
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
