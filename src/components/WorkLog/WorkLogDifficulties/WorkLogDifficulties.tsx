import * as React from 'react';
import data from './difficulties.json';

const WorkLogDifficulties = ({ language }) => {
  return (
    <div>
      <h3>{data[language].title}</h3>
      {data[language].text.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
      })}
    </div>
  );
};

export default WorkLogDifficulties;
