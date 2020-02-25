import React from 'react';
import { FormControl, Form } from 'react-bootstrap';
import {
  SEARCH_SEL_TRANSLATES,
  SEARCH_TRANSLATES,
  SEARCH_OPTIONS,
} from '../../../constants';
import './AuthorListSearch.scss';

interface AuthorListSearchProps {
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  lang: string;
  searchValue: string;
  searchOption: string;
}

const AuthorListSearch: React.FC<AuthorListSearchProps> = ({
  handleFilterSelect,
  handleInputChange,
  lang,
  searchValue,
  searchOption,
}) => {
  const options = Object.keys(SEARCH_OPTIONS);
  return (
    <Form.Group className="input-group mb-3">
      <div className="input-group-prepend">
        <Form.Control
          as="select"
          onChange={handleFilterSelect}
          value={searchOption}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {SEARCH_SEL_TRANSLATES[lang][option]}
              </option>
            );
          })}
        </Form.Control>
      </div>

      <FormControl
        type="text"
        placeholder={SEARCH_TRANSLATES[lang]}
        onChange={handleInputChange}
        value={searchValue}
      />
    </Form.Group>
  );
};

export { AuthorListSearch };
