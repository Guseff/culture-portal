import '../components/Main/index.scss';

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';

interface IAuthorState {
  byId: string[];
  author: object;
  pending: boolean;
}

interface ISettingsState {
  language: string;
}

const Main: React.FC = () => {
  const authorState: IAuthorState = useSelector((store: any) => store.author);
  const settingsState = useSelector((store: any) => store.settings);
  const { byId, author, pending }: IAuthorState = authorState;
  const { language }: ISettingsState = settingsState;

  if (pending) {
    return (
      <Container className="content">
        <Spinner className="spinner" animation="border" />
      </Container>
    );
  }

  return (
    <Container className="content">
      <Row>
        <Col className="col_item1">
          <h2 className="main_title">Культурный портал о писателях Беларуси</h2>
          <p className="main_description">
            Культурный портал о писателях Беларуси — сборник статей о выдающихся
            творческих личностях с их подробным описанием, включая годы жизни,
            фотографии, биографии в виде временной шкалы, списки авторских
            работ, видеозаписи, а также карты с обозначением их основной
            деятельности. Вы можете выбрать автора из списка и узнать о нём
            подробнее. Кроме того, каждый день меняется писатель в секции
            «Писатель дня». В графе «О нас» Вы сможете узнать о разработчиках
            сайта, увидеть ход рабочего процесса и посмотреть на шаблон стилей
            сайта.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodayAuthor data={byId} author={author} lang={language} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
