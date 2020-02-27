import './index.scss';

import React, { Component } from 'react';
import AuthorListCards from '../AuthorListCards';
import AuthorListSearch from '../AuthorListSearch';
import { SEARCH_OPTIONS } from '../../../constants';

interface AuthorListAppState {
  filterList: string[];
  searchValue: string;
  searchOption: string;
}

interface AuthorListAppProps {
  data: string[];
  author: object;
  language: string;
}

class AuthorListApp extends Component<AuthorListAppProps, AuthorListAppState> {
  state = {
    filterList: [],
    searchValue: '',
    searchOption: SEARCH_OPTIONS.name,
  };

  componentDidMount() {
    this.setState({
      filterList: this.props.data,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        searchValue: '',
        filterList: this.props.data,
      });
    }
  }

  handleFilterSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;

    this.setState({
      searchValue: '',
      filterList: this.props.data,
      searchOption: target,
    });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { data, author, language } = this.props;
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = data;
      const { searchOption } = this.state;

      newList = currentList.filter((item: string) => {
        const searchValueString = e.target.value.toLowerCase();
        const filter =
          searchOption === SEARCH_OPTIONS.name
            ? author[item][language].name.toLowerCase()
            : author[item][language].birthCity.toLowerCase();

        return filter.includes(searchValueString);
      });
    } else {
      newList = data;
    }

    this.setState({
      filterList: newList,
      searchValue: e.target.value,
    });
  };

  render() {
    const { filterList, searchValue, searchOption } = this.state;
    const { author, language } = this.props;

    return (
      <>
        <AuthorListSearch
          handleFilterSelect={this.handleFilterSelect}
          handleInputChange={this.handleInputChange}
          language={language}
          searchValue={searchValue}
          searchOption={searchOption}
        />
        <AuthorListCards
          list={filterList}
          author={author}
          language={language}
        />
      </>
    );
  }
}

export default AuthorListApp;
