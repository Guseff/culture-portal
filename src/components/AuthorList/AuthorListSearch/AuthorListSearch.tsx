import React from 'react';
import { FormControl, Form } from "react-bootstrap";
import './AuthorListSearch.scss';
import { FILTER_AUTHOR_LIST } from '../../../constants';

const selectList = Object.values(FILTER_AUTHOR_LIST)[0];

interface AuthorListSearchProps {
    handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => any,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const AuthorListSearch: React.FC<AuthorListSearchProps> = ({ handleFilterSelect, handleInputChange }) => {
    return (
        <>
        <Form.Group>
            <FormControl placeholder="Поиск" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Фильтр поиска</Form.Label>
                <Form.Control as="select" className="select" onChange={handleFilterSelect}>
                    {selectList.map((value, index) => {
                       return <option key={index}>{value}</option>
                    })}                   
            </Form.Control>
        </Form.Group>
        </>
    )
}

export { AuthorListSearch };