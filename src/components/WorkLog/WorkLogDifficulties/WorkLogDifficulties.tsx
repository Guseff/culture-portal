import React from 'react';
import data from '../../../data/difficulties.json';

const WorkLogDifficulties = ({ difficulties }) => {
  return (
    <div>
      <h3>{difficulties.title}</h3>
      {difficulties.text.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
      })}
    </div>
  );
};

export default WorkLogDifficulties;
