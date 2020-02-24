import * as React from 'react';
import { Image } from 'react-bootstrap';

interface AuthorPhotoProps {
  name: string;
  image: string;
}

const AuthorPhoto: React.FC<AuthorPhotoProps> = ({ image, name }) => {
  return <Image className="Author-page--photo" src={image} alt={name} />;
};

export default AuthorPhoto;
