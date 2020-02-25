import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { useTranslation } from 'react-i18next';

interface AuthorMapProps {
  longitude: number;
  latitude: number;
}

const AuthorMap: React.FC<AuthorMapProps> = ({ longitude, latitude }) => {
  const { t } = useTranslation();
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg',
  });

  return (
    <React.Fragment>
      <span className="Author-page__map_text">{t('businessPlace')}</span>
      <Map
        className="Author-page__map-container"
        style="mapbox://styles/mapbox/streets-v11"
        center={[latitude, longitude]}
      />
    </React.Fragment>
  );
};

export default AuthorMap;
