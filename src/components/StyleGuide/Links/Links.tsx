import './links.scss';

import React from 'react';

const Links = ({ title }) => (
  <>
    <div>
      <p className="text">Standard link</p>
      <a className="links standard">{title}</a>
    </div>
  </>
);

export default Links;
