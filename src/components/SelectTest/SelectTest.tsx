import * as React from 'react';
import { connect } from 'react-redux';

import { setLanguage } from '../../actions';
import { Form } from 'react-bootstrap';
import { LANGUAGES } from '../../constants';

const languages = Object.values(LANGUAGES);

class SelectTest extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  setLanguageHandle = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    setLanguage(e.currentTarget.value);
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

export default connect(null, { SelectTest })(SelectTest);
