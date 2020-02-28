import '../components/WorkLog/index.scss';
import * as React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IStoreState, IWorkLog } from '../types';

// import data from '../data/worklog-data.json';
import WorkLogDifficulties from '../components/WorkLog/WorkLogDifficulties';
import WorkLogSelfCheck from '../components/WorkLog/WorkLogSelfCheck';
import WorkLogTable from '../components/WorkLog/WorkLogTable';

const WorkLog = () => {
  const worklogObj: IWorkLog = useSelector(
    (store: IStoreState) => store.worklog
  );
  const settings = useSelector((store: IStoreState) => store.settings);
  const { language } = settings;
  const { pending, worklog } = worklogObj;

  console.log(worklog);

  return (
    <Container className="content content-worklog">
      {pending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <>
          <WorkLogTable data={worklog[language]} />
          <WorkLogDifficulties language={language} />
          <WorkLogSelfCheck language={language} />
        </>
      )}
    </Container>
  );
};

export default WorkLog;
