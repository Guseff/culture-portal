import React from 'react';
import './typographica.scss';

const Typographica = ({ title }) => (
  <>
    <div className="typographica h1">H1: {`${title}`}</div>
    <div className="typographica h2">H2: {title}</div>
    <div className="typographica h3">H3: {title}</div>
    <div className="typographica h4">H4: {title}</div>
    <div className="typographica h5">H5: {title}</div>
    <div className="typographica h6">H6: {title}</div>
  </>
);

export default Typographica;
