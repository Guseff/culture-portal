import './index.scss';

import React from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SEARCH_OPTIONS } from '../../../constants';

interface IAuthorListSearchProps {
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  searchOption: string;
}

const AuthorListSearch: React.FC<IAuthorListSearchProps> = ({
  handleFilterSelect,
  handleInputChange,
  searchValue,
  searchOption,
}) => {
  const { t } = useTranslation();
  const { name, city } = SEARCH_OPTIONS;

  return (
    <Form.Group className="input-group mb-3">
      <div className="input-group-prepend">
        <Form.Control
          as="select"
          className="input-group-select"
          onChange={handleFilterSelect}
          value={searchOption}
        >
          <option value={name}>{t('byName')}</option>
          <option value={city}>{t('byBornPlace')}</option>
        </Form.Control>
      </div>

      <FormControl
        type="text"
        placeholder={t('search')}
        onChange={handleInputChange}
        value={searchValue}
      />
    </Form.Group>
  );
};

export default AuthorListSearch;
