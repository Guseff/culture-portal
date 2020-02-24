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
        <Container className="main-block2">
          <Row>
            <Col className="main-block2-col1">
              <h2 className="main-block2__title">Писатель дня</h2>
            </Col>
          </Row>
          <Row>
            <Col className="main-block2__img" xs={5}>
              <Image
                src={author[id].photo}
                alt={author[id][locale].name}
                fluid
              />
            </Col>
            <Col className="main-block2__body">
              <p className="main-block2__text1">{author[id][locale].name}</p>
              <p className="main-block2__text2">{`${getPrettyDate(
                author[id][locale].birthDate
              )} - ${getPrettyDate(author[id][locale].deathDate)}`}</p>
              <p className="main-block2__text3">
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
