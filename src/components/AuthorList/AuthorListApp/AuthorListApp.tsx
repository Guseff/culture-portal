import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { AuthorListCards } from '../AuthorListCards/AuthorListCards';
import { AuthorListSearch } from '../AuthorListSearch/AuthorListSearch';
import { FILTER_AUTHOR_LIST } from '../../../constants';
import './AuthorListApp.scss';

const selectList = Object.values(FILTER_AUTHOR_LIST);

interface AuthorListAppState {
  filterList: string[],
  filterSearch: string
}
    
interface AuthorListAppProps {
  data: string[],
  author: object,
  lang: string
}
  
class AuthorListApp extends Component<AuthorListAppProps, AuthorListAppState> {
  state = {
    filterList: [],
    filterSearch: selectList[0][0]
  }

  componentDidMount() {
    this.setState({
      filterList: this.props.data
    });
  }

  componentWillReceiveProps(nextProps: { data: string[]; }) {
    this.setState({
      filterList: nextProps.data
    });
  }

  handleFilterSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;

    this.setState({
      filterSearch: target
    })
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { data, author, lang } = this.props;
    let currentList = [];    
    let newList = [];       
      
    if (e.target.value !== '') {        
        currentList = data;
        const { filterSearch } = this.state;
            
        newList = currentList.filter((item: string) => {   
          const searchValue = e.target.value.toLowerCase();            
          const filter = filterSearch === selectList[0][0] 
                          ? author[item][lang].name.toLowerCase() 
                          : author[item][lang].birthCity.toLowerCase();             
        
          return filter.includes(searchValue);
        });
    } else {
      newList = data;
    }

    this.setState({
      filterList: newList
    });
  }

  render() {
    const { filterList } = this.state;
    const { author, lang } = this.props;

    return (
      <Container>
        <AuthorListSearch 
          handleFilterSelect={this.handleFilterSelect} 
          handleInputChange={this.handleInputChange}/>
         <AuthorListCards list={filterList} author={author} lang={lang}/> 
      </Container>
    )
  }
} 

export default AuthorListApp;
