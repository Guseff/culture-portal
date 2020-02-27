import './navigations.scss';

import React from 'react';

const Navigations = ({ title }) => (
  <>
    <div>
      <p className="text">Standard nav link (in colored container)</p>
      <div className="navigations-container">
        <a className="navigations standard">{title}</a>
      </div>
      <p className="text">Disabled nav link (in colored container)</p>
      <div className="navigations-container">
        <a className="navigations disabled">{title}</a>
      </div>
    </div>
  </>
);

export default Navigations;
