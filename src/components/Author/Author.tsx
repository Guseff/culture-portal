import * as React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import AuthorMap from './AuthorMap/index';
import './index.scss';

interface AuthorProps {
  author: any;
}

export const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Container className="Author-page">
      <Row>
        <Col md="auto" className="Author-page--photo-col">
          <Image
            className="Author-page--photo"
            src={author.photo}
            alt={author.photo}
          />
        </Col>
        <Col sm="6">
          <h3>{author.name}</h3>
          <p>Родился в городе {author.birthCity}</p>
          <p>
            Годы жизни: {author.birthDate} - {author.deathDate}
          </p>
          <p>{author.description}</p>
        </Col>
        <Col md="auto">
          <span>Место деятельности:</span>
          <AuthorMap
            activityPlace={[
              author.location.longitude,
              author.location.latitude,
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 3 }}>
          <iframe
            className="Author-page--iframe"
            src={author.video}
            frameBorder="0"
            allowFullScreen
          />
        </Col>
      </Row>
    </Container>
  );
};
