import './buttons.scss';

import React from 'react';

const Buttons = ({ title }) => (
  <>
    <div>
      <p className="text">Primary button</p>
      <button className="buttons primary">{title}</button>
    </div>
  </>
);

export default Buttons;
