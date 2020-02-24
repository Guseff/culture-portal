import './index.scss';

import React from 'react';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';
import LearnMoreButton from '../LearnMoreButton/';
import { useTranslation } from 'react-i18next';

const currentDay: number = new Date().getDay();

interface ITodayAuthorProps {
  data: string[];
  author: object;
  lang: string;
}

type PrettyDate = (date: string) => string;

const TodayAuthor: React.FC<ITodayAuthorProps> = ({
  data,
  author,
  lang,
}: ITodayAuthorProps) => {
  const { t } = useTranslation();

  const id: string = data[currentDay];

  const getPrettyDate: PrettyDate = (date: string) =>
    date
      .split('-')
      .reverse()
      .join('.');

  return data.length ? (
    <Container className="main-block2">
      <Row>
        <Col className="main-block2-col1">
          <h2 className="main-block2__title">{t('writerOfTheDay')}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="main-block2__img" xs={5}>
          <Image src={author[id].photo} alt={author[id][lang].name} fluid />
        </Col>
        <Col className="main-block2__body">
          <p className="main-block2__text1">{author[id][lang].name}</p>
          <p className="main-block2__text2">{`${getPrettyDate(
            author[id][lang].birthDate
          )} - ${getPrettyDate(author[id][lang].deathDate)}`}</p>
          <p className="main-block2__text3">{author[id][lang].description}</p>
          <LearnMoreButton />
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default TodayAuthor;
