import * as React from 'react';
import data from '../../data/difficulties.json';

const WorkLogDifficulties = ({ language }) => {
  return (
    <div>
      <h3>{data[language].title}</h3>
      <p>{data[language].text}</p>
    </div>
  );
};

export default WorkLogDifficulties;
