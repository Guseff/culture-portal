import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../types';

import data from '../data/worklog-data.json';
import WorkLogDifficulties from '../components/WorkLog/WorkLogDifficulties';
import WorkLogSelfCheck from '../components/WorkLog/WorkLogSelfCheck';
import WorkLogTable from '../components/WorkLog/WorkLogTable';

const WorkLog = () => {
  const settings = useSelector((store: AppState) => store.settings);
  const { language } = settings;

  return (
    <Container>
      <WorkLogTable data={data[language]} />
      <WorkLogDifficulties language={language} />
      <WorkLogSelfCheck language={language} />
    </Container>
  );
};

export default WorkLog;
