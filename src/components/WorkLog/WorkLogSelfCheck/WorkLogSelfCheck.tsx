import './index.scss';

import React from 'react';
import { Form } from 'react-bootstrap';

const WorkLogSelfCheck = ({ selfCheck }) => {
  return (
    <Form>
      <h3 className="worklog-title">{selfCheck.title}</h3>
      <h5 className="selfcheck-title mt-3">{selfCheck.minTitle}</h5>
      <Form.Check label={selfCheck.min1} checked readOnly />
      <Form.Check label={selfCheck.min2} checked readOnly />
      <Form.Check label={selfCheck.min3} checked readOnly />
      <Form.Check label={selfCheck.min4} checked readOnly />
      <h5 className="selfcheck-title mt-3">{selfCheck.normalTitle}</h5>
      <Form.Check label={selfCheck.normal1} checked readOnly />
      <Form.Check label={selfCheck.normal2} checked readOnly />
      <Form.Check label={selfCheck.normal3} checked readOnly />
      <Form.Check label={selfCheck.normal4} checked readOnly />
      <Form.Check label={selfCheck.normal5} checked readOnly />
      <Form.Check label={selfCheck.normal6} checked readOnly />
      <Form.Check label={selfCheck.normal7} checked readOnly />
      <Form.Check label={selfCheck.normal8} checked readOnly />
      <Form.Check label={selfCheck.normal9} checked readOnly />
      <Form.Check label={selfCheck.normal10} checked readOnly />
      <h5 className="selfcheck-title mt-3">{selfCheck.extraTitle}</h5>
      <Form.Check label={selfCheck.extra1} checked readOnly />
      <Form.Check label={selfCheck.extra2} checked readOnly />
      <Form.Check label={selfCheck.extra3} checked readOnly />
      <Form.Check label={selfCheck.extra4} checked readOnly />
      <Form.Check label={selfCheck.extra5} checked readOnly />
      <Form.Check label={selfCheck.extra6} checked readOnly />
      <h5 className="selfcheck-title mt-3">{selfCheck.finesTitle}</h5>
      <Form.Check label={selfCheck.fines1} checked readOnly />
      <Form.Check label={selfCheck.fines2} checked readOnly />
      <Form.Check label={selfCheck.fines3} checked readOnly />
      <Form.Check label={selfCheck.fines4} checked readOnly />
      <h5 className="selfcheck-title selfcheck-total mt-3">{`${selfCheck.total} 280/280`}</h5>
    </Form>
  );
};

export default WorkLogSelfCheck;
