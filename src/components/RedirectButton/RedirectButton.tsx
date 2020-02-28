import './index.scss';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IRedirectButtonProps {
  as?: any;
  link: string;
  text: string;
}

const RedirectButton: React.FC<IRedirectButtonProps> = ({
  as = Link,
  link,
  text,
}) => {
  return as === Link ? (
    <Button variant="outline-secondary" as={as} to={link}>
      {text}
    </Button>
  ) : (
    <Button variant="outline-secondary" as={as} href={link} target="_blank">
      {text}
    </Button>
  );
};

export default RedirectButton;
