import * as React from 'react';
import { Table } from 'react-bootstrap';

const WorkLogTable = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{data.headers.feature}</th>
            <th>{data.headers.from}</th>
            <th>{data.headers.to}</th>
            <th>{data.headers.spent}</th>
            <th>{data.headers.who}</th>
          </tr>
        </thead>
        <tbody>
          {data.body.map((x, i) => {
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
    </div>
  );
};

export default WorkLogTable;
