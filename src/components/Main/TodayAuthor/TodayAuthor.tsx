import './index.scss';

import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import LearnMoreButton from '../LearnMoreButton/';

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
  const id: string = data[currentDay];

  const getPrettyDate: PrettyDate = (date: string) =>
    date
      .split('-')
      .reverse()
      .join('.');

  return data.length ? (
    <Container className="today-author">
      <Row>
        <Col>
          <h2 className="author-title">Писатель дня</h2>
        </Col>
      </Row>
      <Row>
        <Col className="content-col-img" xs={5}>
          <Image
            className="author-photo"
            src={author[id].photo}
            alt={author[id][lang].name}
          />
        </Col>
        <Col className="content-col-data">
          <p className="author-name">{author[id][lang].name}</p>
          <p className="author-date">{`${getPrettyDate(
            author[id][lang].birthDate
          )} - ${getPrettyDate(author[id][lang].deathDate)}`}</p>
          <p className="author-description">{author[id][lang].description}</p>
          <LearnMoreButton />
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default TodayAuthor;
