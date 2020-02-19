import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactMapboxGl from 'react-mapbox-gl';

interface AuthorMapProps {
  location: number[];
}

const AuthorMap: React.FC<AuthorMapProps> = ({ location }) => {
  const [longitude, latitude] = location;
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg',
  });

  return (
    <Row>
      <Col />
      <Col />
      <Col>
        <Map
          style="mapbox://styles/mapbox/streets-v11"
          center={[longitude, latitude]}
          containerStyle={{
            height: '300px',
            width: '300px',
            borderRadius: '10px',
          }}
        />
      </Col>
    </Row>
  );
};

export default AuthorMap;
