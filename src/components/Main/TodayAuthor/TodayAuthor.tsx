import './index.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';
import LearnMoreButton from '../LearnMoreButton/';

const currentDay: number = new Date().getDay();

interface IAuthorState {
  byId: number[];
  author: object;
  pending: boolean;
}

type PrettyDate = (date: string) => string;

const TodayAuthor: React.FC = () => {
  const authorState: IAuthorState = useSelector((store: any) => store.author);
  const { byId, author, pending }: IAuthorState = authorState;

  const locale: string = 'ru'; // language will be taken later

  if (pending) {
    return <Spinner className="spinner" animation="border" />;
  }

  const id: number = byId[currentDay];

  const getPrettyDate: PrettyDate = (date: string) =>
    date
      .split('-')
      .reverse()
      .join('.');

  return (
    <>
      {byId.length && (
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
                alt={author[id][locale].name}
              />
            </Col>
            <Col className="content-col-data">
              <p className="author-name">{author[id][locale].name}</p>
              <p className="author-date">{`${getPrettyDate(
                author[id][locale].birthDate
              )} - ${getPrettyDate(author[id][locale].deathDate)}`}</p>
              <p className="author-description">
                {author[id][locale].description}
              </p>
              <LearnMoreButton />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TodayAuthor;
