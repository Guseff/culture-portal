import './index.scss';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IRedirectButtonProps {
  link: string;
  text: string;
}

const RedirectButton: React.FC<IRedirectButtonProps> = ({ link, text }) => {
  return (
    <Button variant="outline-secondary" as={Link} to={`/${link}`}>
      {text}
    </Button>
  );
};

export default RedirectButton;
