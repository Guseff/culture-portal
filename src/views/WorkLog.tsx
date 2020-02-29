import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IStoreState, IWorkLogState } from 'Types';
import {
  WorkLogTable,
  WorkLogSelfCheck,
  WorkLogDifficulties,
} from '../components/WorkLog';

const WorkLog = () => {
  const worklogState: IWorkLogState = useSelector(
    (store: IStoreState) => store.worklog
  );
  const settings = useSelector((store: IStoreState) => store.settings);
  const { language } = settings;
  const { pending, worklog, difficulties, selfCheck } = worklogState;

  return (
    <Container className="content content-worklog">
      {pending ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <>
          <WorkLogTable data={worklog[language]} />
          <WorkLogDifficulties difficulties={difficulties[language]} />
          <WorkLogSelfCheck selfCheck={selfCheck[language]} />
        </>
      )}
    </Container>
  );
};

export default WorkLog;
