import React from 'react';
import './AuthorListSearch.scss';

const AuthorListSearch: React.FC = () => {
    return (
        <div>
            <input type="text" className="input" placeholder="Поиск..." />       
            <label>Name
                <input type="checkbox" value="Name"/>
            </label>
            <label>City
                <input type="checkbox" value="City"/>
            </label>
        </div>
    )
}

export { AuthorListSearch };