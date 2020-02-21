import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setLanguage } from '../../actions';
import { Form } from 'react-bootstrap';
import { LANGUAGES } from '../../constants';

const languages = Object.values(LANGUAGES);

interface SelectTestProps {
  dispatch: Dispatch;
}

class SelectTest extends React.Component<SelectTestProps> {
  setLanguageHandle = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e.currentTarget);
    this.props.dispatch(setLanguage(e.currentTarget.value));
  };

  render() {
    return (
      <Form>
        <Form.Control as="select" onChange={this.setLanguageHandle}>
          {languages.map((x, i) => {
            return <option key={i}>{x}</option>;
          })}
        </Form.Control>
      </Form>
    );
  }
}

export default connect()(SelectTest);
