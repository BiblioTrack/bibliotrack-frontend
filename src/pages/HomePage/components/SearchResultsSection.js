import React, { useState, useEffect } from 'react';
import BookGrid from '../../../components/BookGrid'; // Import the BookGrid component
import booksData from '../../../assets/booksData.json'; // Import the dummy data
import './SearchResultsSection.css'; 

const SearchResultsSection = () => {
  const [books, setBooks] = useState([]);

  // Set books data from the imported JSON file
  useEffect(() => {
    setBooks(booksData);
  }, []);

  const handleBookClick = (bookId) => {
    console.log(`Book with ID ${bookId} clicked`);
  };

  return (
    <div className="search-results-container">
      <h3 className="search-results-header">Search Results</h3>
      <BookGrid books={books} onBookClick={handleBookClick} />
    </div>
  );
};

export default SearchResultsSection;
