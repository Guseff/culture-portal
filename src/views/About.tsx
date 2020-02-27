import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CardList } from '../components/About';
import RedirectButton from '../components/RedirectButton';
import { IStoreState, ISettingsState, IDeveloperState } from 'Types';

const About: React.FC = () => {
  const developerState = useSelector((store: IStoreState) => store.developer);
  const settingsState = useSelector((store: IStoreState) => store.settings);
  const { language }: ISettingsState = settingsState;
  const { byId, developer, pending }: IDeveloperState = developerState;

  const { t } = useTranslation();

  return (
    <Container className="content">
      {pending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <>
          <Row>
            <section className="about__button">
              <RedirectButton link="worklog" text={t('worklog')} />
              <RedirectButton link="styleguide" text={t('styleguide')} />
            </section>
          </Row>
          <Row>
            <CardList
              developerIds={byId}
              developer={developer}
              language={language}
            />
          </Row>
        </>
      )}
    </Container>
  );
};

export default About;
