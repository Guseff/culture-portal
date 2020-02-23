import * as React from 'react';

import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h1 className="main_title">{t('mainCaption')}</h1>
      <p className="main_description">{t('mainDescription')}</p>
    </React.Fragment>
  );
};

export default Overview;
