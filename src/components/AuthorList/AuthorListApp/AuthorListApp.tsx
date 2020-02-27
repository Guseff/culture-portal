import React, { Component } from 'react';
import AuthorListCardList from '../AuthorListCardList';
import AuthorListSearch from '../AuthorListSearch';
import { SEARCH_OPTIONS } from '../../../constants';

interface IAuthorListAppState {
  filterList: string[];
  searchValue: string;
  searchOption: string;
}

interface IAuthorListAppProps {
  authorIds: string[];
  author: object;
  language: string;
}

class AuthorListApp extends Component<
  IAuthorListAppProps,
  IAuthorListAppState
> {
  state = {
    filterList: [],
    searchValue: '',
    searchOption: SEARCH_OPTIONS.name,
  };

  componentDidMount() {
    const { authorIds } = this.props;

    this.setState({
      filterList: authorIds,
    });
  }

  componentDidUpdate(prevProps) {
    const { language, authorIds } = this.props;

    if (language !== prevProps.language) {
      this.setState({
        searchValue: '',
        filterList: authorIds,
      });
    }
  }

  handleFilterSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { authorIds } = this.props;
    const {
      target: { value },
    } = event;

    this.setState({
      searchValue: '',
      filterList: authorIds,
      searchOption: value,
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { authorIds, author, language } = this.props;
    const {
      target: { value },
    } = event;
    let currentList = [];
    let newList = [];

    if (value !== '') {
      currentList = authorIds;
      const { searchOption } = this.state;

      newList = currentList.filter((item: string) => {
        const searchValueString = value.toLowerCase();
        const filter =
          searchOption === SEARCH_OPTIONS.name
            ? author[item][language].name.toLowerCase()
            : author[item][language].birthCity.toLowerCase();

        return filter.includes(searchValueString);
      });
    } else {
      newList = authorIds;
    }

    this.setState({
      filterList: newList,
      searchValue: value,
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
          searchValue={searchValue}
          searchOption={searchOption}
        />
        <AuthorListCardList
          authorList={filterList}
          author={author}
          language={language}
        />
      </>
    );
  }
}

export default AuthorListApp;
