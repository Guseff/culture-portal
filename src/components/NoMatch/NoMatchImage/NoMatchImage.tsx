import './index.scss';

import React from 'react';
import { Row, Image } from 'react-bootstrap';
import notFound from '../../../assets/images/notFound.png';

const NoMatchImage: React.FC = () => {
  return (
    <Row className="justify-content-md-center">
      <Image className="no-match-image" src={notFound} alt="Not Found" />
    </Row>
  );
};

export default NoMatchImage;
