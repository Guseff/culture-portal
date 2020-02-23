import '../components/Main/index.scss';

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TodayAuthor from '../components/Main/';
import { Translation } from 'react-i18next';
import { Trans } from 'react-i18next';

class Main extends React.Component {
  title: string;
  name: string;
  i18nKey: string;

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
            <Translation>
              {t => (
                <h1 className="main_title">
                  {t('Культурный портал о писателях Беларуси')}
                </h1>
              )}
            </Translation>
            <Trans i18nKey="myLangText">
              <p className="main_description">
                Культурный портал о писателях Беларуси — сборник статей о
                выдающихся творческих личностях с их подробным описанием,
                включая годы жизни, фотографии, биографии в виде временной
                шкалы, списки авторских работ, видеозаписи, а также карты с
                обозначением их основной деятельности. Вы можете выбрать автора
                из списка и узнать о нём подробнее. Кроме того, каждый день
                меняется писатель в секции «Писатель дня». В графе «О нас» Вы
                сможете узнать о разработчиках сайта, увидеть ход рабочего
                процесса и посмотреть на шаблон стилей сайта.
              </p>
            </Trans>
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
