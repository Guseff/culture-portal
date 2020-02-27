import './selects.scss';

import React from 'react';

const Selects = ({ title }) => (
  <>
    <div>
      <p className="text">Standard select</p>
      <select className="selects standard" placeholder={title}>
        <option value="1">Choose 1</option>
        <option value="2">Choose 2</option>
        <option value="3">Choose 3</option>
      </select>
      <p className="text">Language select (in colored container)</p>
      <div className="selects-container">
        <select className="selects language" placeholder={title}>
          <option>Choose 1</option>
          <option>Choose 2</option>
          <option>Choose 3</option>
        </select>
      </div>
    </div>
  </>
);

export default Selects;
