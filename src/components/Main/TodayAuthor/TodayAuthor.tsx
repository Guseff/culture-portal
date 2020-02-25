import './index.scss';

import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import LearnMoreButton from '../LearnMoreButton/';
import { useTranslation } from 'react-i18next';

const currentDay: number = new Date().getDay();

interface ITodayAuthorProps {
  authorIds: string[];
  author: object;
  language: string;
}

type PrettyDate = (date: string) => string;

const TodayAuthor: React.FC<ITodayAuthorProps> = ({
  authorIds,
  author,
  language,
}) => {
  const { t } = useTranslation();

  const todayAuthorId: string = authorIds[currentDay];

  const getPrettyDate: PrettyDate = (date: string) =>
    date
      .split('-')
      .reverse()
      .join('.');

  return (
    authorIds.length && (
      <Container className="main-block2">
        <Row>
          <Col className="main-block2-col1">
            <h2 className="main-block2__title">{t('writerOfTheDay')}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="main-block2__img" xs={5}>
            <Image
              src={author[todayAuthorId].photo}
              alt={author[todayAuthorId][language].name}
              fluid
            />
          </Col>
          <Col className="main-block2__body">
            <p className="main-block2__text1">
              {author[todayAuthorId][language].name}
            </p>
            <p className="main-block2__text2">{`${getPrettyDate(
              author[todayAuthorId][language].birthDate
            )} - ${getPrettyDate(
              author[todayAuthorId][language].deathDate
            )}`}</p>
            <p className="main-block2__text3">
              {author[todayAuthorId][language].description}
            </p>
            <LearnMoreButton id={todayAuthorId} />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default TodayAuthor;
