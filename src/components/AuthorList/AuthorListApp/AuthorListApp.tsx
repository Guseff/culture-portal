import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { AuthorListCards } from '../AuthorListCards/AuthorListCards';
import { AuthorListSearch } from '../AuthorListSearch/AuthorListSearch';
import { SEARCH_OPTIONS } from '../../../constants';
import './AuthorListApp.scss';

interface AuthorListAppState {
  filterList: string[];
  searchValue: string;
  searchOption: string;
}

interface AuthorListAppProps {
  data: string[];
  author: object;
  lang: string;
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
    if (this.props.lang !== prevProps.lang) {
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
    const { data, author, lang } = this.props;
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = data;
      const { searchOption } = this.state;

      newList = currentList.filter((item: string) => {
        const searchValueString = e.target.value.toLowerCase();
        const filter =
          searchOption === SEARCH_OPTIONS.name
            ? author[item][lang].name.toLowerCase()
            : author[item][lang].birthCity.toLowerCase();

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
    const { author, lang } = this.props;

    return (
      <>
        <AuthorListSearch
          handleFilterSelect={this.handleFilterSelect}
          handleInputChange={this.handleInputChange}
          lang={lang}
          searchValue={searchValue}
          searchOption={searchOption}
        />
        <AuthorListCards list={filterList} author={author} lang={lang} />
      </>
    );
  }
}

export default AuthorListApp;
