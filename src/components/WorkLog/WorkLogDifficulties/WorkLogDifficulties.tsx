import * as React from 'react';
import data from './difficulties.json';

const WorkLogDifficulties = ({ language }) => {
  return (
    <div>
      <h3>{data[language].title}</h3>
      {data[language].text.map((x, i) => {
        return <p key={i}>{x}</p>;
      })}
    </div>
  );
};

export default WorkLogDifficulties;
