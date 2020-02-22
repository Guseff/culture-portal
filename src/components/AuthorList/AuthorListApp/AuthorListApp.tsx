import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { AuthorListCards } from '../AuthorListCards/AuthorListCards';
import { AuthorListSearch } from '../AuthorListSearch/AuthorListSearch';

interface AuthorListAppState {
  filterList: object[]
}
    
interface AuthorListAppProps {
  data: object[]
}
  
class AuthorListApp extends Component<AuthorListAppProps, AuthorListAppState> {
    state = {
      filterList: [],
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

    render() {
      const { filterList } = this.state;

      return (
        <Container>
          <AuthorListSearch />
          <AuthorListCards list={filterList}/>
        </Container>
      )
    }
} 

export default AuthorListApp;
