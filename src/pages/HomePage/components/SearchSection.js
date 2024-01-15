// SearchSection.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar.js';
import './SearchSection.css';

const SearchSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <Container fluid className="search-section-container">
      <Row className="justify-content-center text-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1>BiblioTrack</h1>
          <p>Welcome to our library management system</p>
          <SearchBar
            placeholder="Search Books..."
            value={searchQuery}
            onChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchSection;
