import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface LearnMoreButtonProps {
  id: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  id,
}: LearnMoreButtonProps) => {
  const { t } = useTranslation();

  return (
    <Link to={`/author/${id}`} className="btn-container">
      <Button variant="outline-secondary">{t('learnMore')}</Button>
    </Link>
  );
};

export default LearnMoreButton;
