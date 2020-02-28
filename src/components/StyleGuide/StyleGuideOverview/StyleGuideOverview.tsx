import './index.scss';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import RedirectButton from '../../RedirectButton';

const StyleGuideOverview = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="styleguide__title">{t('styleguide')}</h3>
      <p className="styleguide__overview">{t('styleguideOverview')}</p>
      <Row>
        <Col>
          <p className="styleguide__text">{t('styleguideLink')}</p>
          <RedirectButton
            as="a"
            link="https://culture-portal-style-guide.netlify.com/"
            text={t('redirect')}
          />
        </Col>
        <Col>
          <p className="styleguide__text">{t('styleguidist')}</p>
          <RedirectButton
            as="a"
            link="https://react-styleguidist.js.org/"
            text={t('redirect')}
          />
        </Col>
      </Row>
    </>
  );
};

export default StyleGuideOverview;
