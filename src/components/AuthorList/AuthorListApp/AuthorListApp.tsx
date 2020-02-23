import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { AuthorListCards } from '../AuthorListCards/AuthorListCards';
import { AuthorListSearch } from '../AuthorListSearch/AuthorListSearch';
import { FILTER_AUTHOR_LIST } from '../../../constants';
import './AuthorListApp.scss';

const selectList = Object.values(FILTER_AUTHOR_LIST);

interface AuthorListAppState {
  filterList: object[],
  filterSearch: string
}
    
interface AuthorListAppProps {
  data: object[]
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

  componentWillReceiveProps(nextProps: { data: []; }) {
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
    let currentList = [];    
    let newList = [];       
      
    if (e.target.value !== '') {        
        currentList = this.props.data;
        const { filterSearch } = this.state;
            
        newList = currentList.filter((item: any) => {   
          const searchValue = e.target.value.toLowerCase();            
          const filter = filterSearch === 'Имя' 
                          ? item.name.toLowerCase() 
                          : item.birthCity.toLowerCase();             
        
          return filter.includes(searchValue);
        });
    } else {
      newList = this.props.data;
    }

    this.setState({
      filterList: newList
    });
}

  render() {
    const { filterList } = this.state;
    return (
      <Container>
        <AuthorListSearch 
          handleFilterSelect={this.handleFilterSelect} 
          handleInputChange={this.handleInputChange}/>
        <AuthorListCards list={filterList}/>
      </Container>
    )
  }
} 

export default AuthorListApp;
