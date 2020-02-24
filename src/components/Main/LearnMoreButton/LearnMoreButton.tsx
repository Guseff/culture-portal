import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LearnMoreButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Link to="/author" className="btn-container">
      {' '}
      {/* must give props to author component */}
      <Button variant="outline-secondary">{t('learnMore')}</Button>
    </Link>
  );
};

export default LearnMoreButton;
