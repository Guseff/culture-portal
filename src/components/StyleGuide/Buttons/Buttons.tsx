import React from 'react';
import './buttons.scss';

const Buttons = ({ title }) => (
  <>
    <div>
      Primary button
      <button className="buttons primary">{title}</button>
    </div>
    <div>
      Secondarybutton
      <button className="buttons secondary">{title}</button>
    </div>
  </>
);

export default Buttons;
