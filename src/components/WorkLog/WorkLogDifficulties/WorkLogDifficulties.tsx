import './index.scss';

import React from 'react';

const WorkLogDifficulties = ({ difficulties }) => {
  return (
    <div>
      <h3 className="worklog-title">{difficulties.title}</h3>
      {difficulties.text.map((paragraph, idx) => {
        return (
          <p className="worklog-text" key={idx}>
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default WorkLogDifficulties;
