import React from 'react';

interface AuthorListCardsProps {
  list: object[]
}

const AuthorListCards: React.FC<AuthorListCardsProps> = ({ list }) => {
  return (
          <div className="row justify-content-around">
              {list.map((item: any) => (                  
                  <div className="card col-3" key={item.id}>
                      <div className="card-body photo">
                        <img className="img-fluid shadow rounded" 
                            src={item.image} 
                            alt={item.name}/>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.birthCity}</p>
                        <a href="#" className="btn btn-outline-info">Узнать больше</a>
                      </div>
                  </div>   
              ))}
          </div>  
          )        
}

export { AuthorListCards };







