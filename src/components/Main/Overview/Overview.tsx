import React from 'react';

import { IAboutProject } from 'Types';

interface IOverviewProps {
  overview: IAboutProject;
  language: string;
}

const Overview: React.FC<IOverviewProps> = ({ overview, language }) => {
  return (
    <>
      <h1 className="main_title">{overview[language].title}</h1>
      <p className="main_description">{overview[language].description}</p>
    </>
  );
};

export default Overview;
