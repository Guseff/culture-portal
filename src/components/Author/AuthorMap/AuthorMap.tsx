import * as React from 'react';
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
      className="Author-page__map-container"
      style="mapbox://styles/mapbox/streets-v11"
      center={[longitude, latitude]}
    />
  );
};

export default AuthorMap;
