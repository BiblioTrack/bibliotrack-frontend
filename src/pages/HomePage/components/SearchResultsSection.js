import React, { useState, useEffect } from 'react';
import BookGrid from './BookGrid.js'; 
import booksData from '../../../assets/booksData.json'; // Import the dummy data
import './SearchResultsSection.css'; 

const SearchResultsSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //TODO: Use API GET books endpoint

    //Mock
    setBooks(booksData);
  }, []);

  return (
    <div className="search-results-container">
      <h3 className="search-results-header">Search Results</h3>
      <BookGrid books={books} />
    </div>
  );
};

export default SearchResultsSection;
