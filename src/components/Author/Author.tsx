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
        <Col md="auto" style={{ backgroundColor: '#80808038' }}>
          <Image
            src={data[id].image}
            alt={data[id].name}
            className="Author-page--photo"
            width="150px"
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
        <Col md={{ span: 12, offset: 3 }}>
          <iframe
            src={data[id].video}
            frameBorder="0"
            allowFullScreen
            width="400px"
            height="200px"
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
