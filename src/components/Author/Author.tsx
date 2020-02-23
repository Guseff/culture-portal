import './index.scss';

import * as React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
// import { connect } from 'react-redux';

import data from '../../data/writersData';
import AuthorMap from './AuthorMap/index';
// import { AppState } from '../../types';

interface AuthorProps {
  id: number;
}

const Author: React.FC<AuthorProps> = ({ id }) => {
  return (
    <Container className="Author-page">
      <Row>
        <Col md="auto" className="Author-page--photo-col">
          <Image
            className="Author-page--photo"
            src={data[id].image}
            alt={data[id].name}
          />
        </Col>
        <Col sm="6">
          <h3>{data[id].name}</h3>
          <p>
            Родился {data[id].years} в городе {data[id].birthCity}.
          </p>
          <p>{data[id].description}</p>
        </Col>
        <Col md="auto">
          <span>Место деятельности:</span>
          <AuthorMap activityPlace={data[id].location} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <iframe
            className="Author-page--iframe"
            src={data[id].video}
            frameBorder="0"
            allowFullScreen
          />
        </Col>
      </Row>
    </Container>
  );
};

// const mapStateToProps = (state: AppState): AuthorProps => {
//   return { id: state.settings.language };
// };

export default Author;
