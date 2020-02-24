import * as React from 'react';
import { Image } from 'react-bootstrap';

interface AuthorPhotoProps {
  name: any;
  photo: string;
  authorId: number;
}

const AuthorPhoto: React.FC<AuthorPhotoProps> = ({ photo, name }) => {
  return <Image className="Author-page--photo" src={photo} alt={name} />;
};

export default AuthorPhoto;
