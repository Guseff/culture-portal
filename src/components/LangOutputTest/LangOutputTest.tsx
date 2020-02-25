import * as React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { IStoreState } from 'Types';

interface LangOutputProps {
  language?: string;
}

const LangOutputTest: React.FC<LangOutputProps> = ({ language }) => {
  return <Container>{`Language ${language}`}</Container>;
};

const mapStateToProps = (state: IStoreState): LangOutputProps => {
  return { language: state.settings.language };
};

export default connect(mapStateToProps)(LangOutputTest);
