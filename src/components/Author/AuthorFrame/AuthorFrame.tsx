import React from 'react';

interface IAuthorFrame {
  videoUrl: string;
}

const AuthorFrame: React.FC<IAuthorFrame> = ({ videoUrl }: IAuthorFrame) => {
  return (
    <iframe
      className="Author-page--iframe"
      src={videoUrl}
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default AuthorFrame;
