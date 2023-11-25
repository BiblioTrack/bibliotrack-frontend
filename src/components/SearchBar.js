// SearchBar.js
import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <Form>
      <InputGroup className="searchBar">
        <Form.Control 
          type="text"
          placeholder={placeholder || 'Search ...'}
          className="searchInput"
        />
        <Button
          variant="info"
          className="searchButton"
          onClick={onSearch}
        >
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
