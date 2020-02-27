import React from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SEARCH_OPTIONS } from '../../../constants';
import './AuthorListSearch.scss';

interface IAuthorListSearchProps {
  handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  lang: string;
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
  return (
    <Form.Group className="input-group mb-3">
      <div className="input-group-prepend">
        <Form.Control
          as="select"
          onChange={handleFilterSelect}
          value={searchOption}
        >
          <option value={SEARCH_OPTIONS.name}>{t('byName')}</option>
          <option value={SEARCH_OPTIONS.city}>{t('byBornPlace')}</option>
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

export { AuthorListSearch };
