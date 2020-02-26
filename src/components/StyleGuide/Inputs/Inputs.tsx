import React from 'react';
import './inputs.scss';

const Inputs = ({ title }) => (
  <>
    <div>
      Standard input
      <input className="inputs standard" placeholder={title} />
    </div>
    <div>
      Disabled input
      <input disabled className="inputs disabled" placeholder={title} />
    </div>
  </>
);

export default Inputs;
