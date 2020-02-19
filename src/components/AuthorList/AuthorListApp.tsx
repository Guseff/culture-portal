import React, { Component } from 'react';
import { AuthorListCards } from './AuthorListCards';

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
        <AuthorListCards list={filterList}/>
      )
    }
} 

export default AuthorListApp;
