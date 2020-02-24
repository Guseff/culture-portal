import React from 'react';
import { Image } from 'react-bootstrap';

interface IAuthorPhotoProps {
  name: string;
  photo: string;
}

const AuthorPhoto: React.FC<IAuthorPhotoProps> = ({
  photo,
  name,
}: IAuthorPhotoProps) => {
  return <Image className="Author-page--photo" src={photo} alt={name} />;
};

export default AuthorPhoto;
