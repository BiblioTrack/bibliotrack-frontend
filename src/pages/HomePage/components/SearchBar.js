// SearchBar.js
import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ placeholder, value, onSearch, onChange }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    onSearch();
  }
  
  return (
    <Form onSubmit={onFormSubmit}>
      <InputGroup className="searchBar">
        <Form.Control 
          type="text"
          placeholder={placeholder || 'Search ...'}
          className="searchInput"
          value={value}
          onChange={onChange}
        />
        <Button
          variant="info"
          className="searchButton"
          type='submit'
        >
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
