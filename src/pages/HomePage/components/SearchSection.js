import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../../../components/SearchBar';
import './SearchSection.css'; 


const SearchSection = () => {
  return (
    <Container fluid className="search-section-container">
      <Row className="justify-content-center text-center ">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1>BiblioTrack</h1>
          <p>Welcome to our library management system</p>
          <SearchBar
            placeholder="Search Books..."
            onSearch={() => {
              //TODO: Handle search action
              console.log('Search initiated!');
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchSection; // Make sure to include this line
