import './index.scss';

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

interface IAuthorSliderProps {
  gallery: [];
}

const AuthorSlider: React.FC<IAuthorSliderProps> = ({ gallery }) => {
  const { t } = useTranslation();

  return (
    <>
      <h4 className="gallery-title">{t('gallery')}</h4>
      <Carousel className="gallery" interval={3000}>
        {gallery.map((photo: string, index: number) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={photo} alt="Вook cover" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default AuthorSlider;
