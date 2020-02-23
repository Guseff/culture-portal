import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../types';

import data from '../data/worklog-data.json';
import WorkLogTable from '../components/WorkLog/WorkLogTable';

const WorkLog = () => {
  const settings = useSelector((store: AppState) => store.settings);
  const { language } = settings;

  return (
    <Container className="content">
      <h3>Work Log</h3>
      <h5>Lang: {language}</h5>
      <WorkLogTable data={data[language]} />
    </Container>
  );
};

export default WorkLog;
