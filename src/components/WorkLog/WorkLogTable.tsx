import * as React from 'react';
import { Table } from 'react-bootstrap';

const WorkLogTable = ({ data }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Subtask description</th>
          <th>Started</th>
          <th>Ended</th>
          <th>Time spent</th>
          <th>Implemented by</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, i) => {
          return x.feature ? (
            <tr key={i}>
              <td>{x.feature}</td>
              <td>{x.from}</td>
              <td>{x.to}</td>
              <td>{x.spent}</td>
              <td>{x.who}</td>
            </tr>
          ) : null;
        })}
      </tbody>
    </Table>
  );
};

export default WorkLogTable;
