import React, { Component } from 'react';
import './AuthorListCards.module.css';

interface AuthorListCardsState {
  filterList: object[]
}
  
interface AuthorListCardsProps {
  data: object[]
}

class AuthorListCards extends Component<AuthorListCardsProps, AuthorListCardsState> {
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
            <div className="row justify-content-around">
                { filterList.map((item: any) => (                  
                    <div className="card col-3" key={item.id}>
                        <div className="card-body photo">
                          <img className="img-fluid shadow rounded" src={item.image} alt={item.name}/>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.birthCity}</p>
                          <a href="#" className="btn btn-primary">Learn more</a>
                        </div>
                    </div>   
                ))}
            </div>  
        )
    }
}

export { AuthorListCards };