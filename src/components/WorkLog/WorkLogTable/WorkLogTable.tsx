import * as React from 'react';
import { Table } from 'react-bootstrap';

const WorkLogTable = ({ data }) => {
  return (
    <div>
      <h3 className="worklog__title">{data.title}</h3>
      <Table hover>
        <thead>
          <tr>
            <th scope="col">{data.headers.feature}</th>
            <th scope="col">{data.headers.from}</th>
            <th scope="col">{data.headers.to}</th>
            <th scope="col">{data.headers.spent}</th>
            <th scope="col">{data.headers.who}</th>
          </tr>
        </thead>
        <tbody>
          {data.body.map((tableRow, i) => {
            return tableRow.feature ? (
              <tr key={i}>
                <td data-label={data.headers.feature}>{tableRow.feature}</td>
                <td data-label={data.headers.from}>{tableRow.from}</td>
                <td data-label={data.headers.to}>{tableRow.to}</td>
                <td data-label={data.headers.spent}>{tableRow.spent}</td>
                <td data-label={data.headers.who}>{tableRow.who}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default WorkLogTable;
