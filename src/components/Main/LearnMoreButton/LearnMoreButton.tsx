import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LearnMoreButton: React.FC = () => {
  return (
    <Link to="/author" className="btn-container">
      {' '}
      {/* must give props to author component */}
      <Button variant="outline-secondary">Узнать больше</Button>
    </Link>
  );
};

export default LearnMoreButton;
