import '../components/Main/index.scss';

import * as React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';

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
      <Container className="content">
        <Row>
          <Col className="col_item1">
            <h2 className="main_title">
              Культурный портал о писателях Беларуси
            </h2>
            <p className="main_description">
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
          </Col>
        </Row>
        <Row>
          <Col>
            <TodayAuthor />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
