import './index.scss';

import React from 'react';
import { Image } from 'react-bootstrap';

interface IAuthorPhotoProps {
  name: string;
  photo: string;
}

const AuthorPhoto: React.FC<IAuthorPhotoProps> = ({ photo, name }) => {
  return <Image className="author-page__img" src={photo} alt={name} />;
};

export default AuthorPhoto;
