import './colors.scss';

import React from 'react';

const Colors = () => (
  <>
    <div>
      <p className="text">Primary color (ex. header, footer)</p>
      <div className="colors primary">Primary</div>
      <p className="text">Secondary color (ex. pages background)</p>
      <div className="colors secondary">Secondary</div>
    </div>
  </>
);

export default Colors;
