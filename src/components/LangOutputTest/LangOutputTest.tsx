import * as React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { AppState } from '../../types';

interface LangOutputProps {
  language?: string;
}

const LangOutputTest: React.FC<LangOutputProps> = ({ language }) => {
  console.log('component', language);
  return <Container>{`Language ${language}`}</Container>;
};

const mapStateToProps = (state: AppState): LangOutputProps => {
  return { language: state.settings.language };
};
export default connect(mapStateToProps)(LangOutputTest);
