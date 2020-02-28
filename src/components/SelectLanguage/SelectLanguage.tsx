import './index.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Form } from 'react-bootstrap';

import { setLanguage } from 'Actions';
import { LANGUAGES } from 'Constants';
import { IStoreState } from 'Types';
import { getLanguageString } from 'Utils';

import i18n from 'i18next';

const languages = Object.values(LANGUAGES);

interface ISelectLanguageProps {
  dispatch: Dispatch;
}

interface ISelectLanguagePropsS {
  language?: string;
}

class SelectLanguage extends React.Component<
  ISelectLanguageProps & ISelectLanguagePropsS
> {
  setLanguageHandle = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.props.dispatch(setLanguage(e.currentTarget.value));
    i18n.changeLanguage(e.currentTarget.value);
  };

  render() {
    const { language } = this.props;
    return (
      <Form className="lang_select">
        <Form.Control
          as="select"
          value={language}
          onChange={this.setLanguageHandle}
        >
          {languages.map((language, i) => {
            return (
              <option className="form-option" key={i} value={language}>
                {getLanguageString(language)}
              </option>
            );
          })}
        </Form.Control>
      </Form>
    );
  }
}

const mapStateToProps = (state: IStoreState): ISelectLanguagePropsS => {
  return { language: state.settings.language };
};

export default connect(mapStateToProps)(SelectLanguage);
