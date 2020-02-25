import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NoMatchInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-md-center">
      <p className="no-match-text">
        {t('noMatchInfo')}
        <br />
        {t('noMatchSuggest')}
        <Link to="/">{' ' + t('noMatchLinkToHome')}</Link>
      </p>
    </Row>
  );
};

export default NoMatchInfo;
