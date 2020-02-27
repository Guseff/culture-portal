import './inputs.scss';

import React from 'react';

const Inputs = ({ title }) => (
  <>
    <div>
      <p className="text">Standard input</p>
      <input className="inputs standard" placeholder={title} />
    </div>
  </>
);

export default Inputs;
