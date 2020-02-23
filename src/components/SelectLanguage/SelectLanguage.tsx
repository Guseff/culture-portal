import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setLanguage } from '../../actions';
import { Form } from 'react-bootstrap';
import { LANGUAGES } from '../../constants';

import i18n from 'i18next';

const languages = Object.values(LANGUAGES);

interface SelectTestProps {
  dispatch: Dispatch;
}

class SelectTest extends React.Component<SelectTestProps> {
  setLanguageHandle = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.props.dispatch(setLanguage(e.currentTarget.value));

    if (e.currentTarget.value === 'english') {
      i18n.changeLanguage('en');
    } else if (e.currentTarget.value === 'беларуская') {
      i18n.changeLanguage('be');
    } else if (e.currentTarget.value === 'русский') {
      i18n.changeLanguage('ru');
    }
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
