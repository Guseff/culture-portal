import React from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { SEARCH_SEL_TRANSLATES, SEARCH_TRANSLATES } from '../../../constants';
import './AuthorListSearch.scss';

interface AuthorListSearchProps {
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  lang: string;
}

const AuthorListSearch: React.FC<AuthorListSearchProps> = ({
  handleFilterSelect,
  handleInputChange,
  lang,
}) => {
  return (
    <Form.Group className="input-group mb-3 row mx-0">
      <div className="input-group-prepend col-md-4 px-0">
        <Form.Control as="select" onChange={handleFilterSelect}>
          {SEARCH_SEL_TRANSLATES[lang].map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </Form.Control>
      </div>
      <FormControl
        className="col-md-8"
        type="text"
        placeholder={SEARCH_TRANSLATES[lang]}
        onChange={handleInputChange}
      />
    </Form.Group>
  );
};

export { AuthorListSearch };
