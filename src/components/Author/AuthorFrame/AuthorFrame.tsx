import * as React from 'react';

const AuthorFrame = ({ videoUrl }) => {
  return (
    <iframe
      className="Author-page_iframe"
      src={videoUrl}
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default AuthorFrame;
