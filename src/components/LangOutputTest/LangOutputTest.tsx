import * as React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

// type LangOutputProps = {
//   language?: string;
// };

const LangOutputTest = ({ language }: { language: {} }) => {
  console.log('component', language);
  return <Container>{`Language `}</Container>;
};

const mapStateToProps = (state: { language: {} }) => {
  const language = { state };
  console.log(language);
  return { language };
};
export default connect(mapStateToProps)(LangOutputTest);
