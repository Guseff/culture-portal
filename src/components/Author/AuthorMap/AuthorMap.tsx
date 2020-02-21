import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactMapboxGl from 'react-mapbox-gl';

interface AuthorMapProps {
  activityPlace: number[];
}

const AuthorMap: React.FC<AuthorMapProps> = ({ activityPlace }) => {
  const [latitude, longitude] = activityPlace;
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg',
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      center={[longitude, latitude]}
      containerStyle={{
        height: '200px',
        width: '200px',
        borderRadius: '10px',
        marginTop: '15px',
      }}
    />
  );
};

export default AuthorMap;
