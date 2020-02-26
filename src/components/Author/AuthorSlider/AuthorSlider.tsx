import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface IAuthorSliderProps {
  gallery: [];
}

const AuthorSlider: React.FC<IAuthorSliderProps> = ({ gallery }) => {
  return (
    <Carousel interval={3000}>
      {gallery.map((item: string, index: number) => {
        return (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item} alt="Вook cover" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default AuthorSlider;
