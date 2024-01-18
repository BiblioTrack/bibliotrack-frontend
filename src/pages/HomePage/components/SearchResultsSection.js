import React, { useState, useEffect } from 'react';
import BookGrid from './BookGrid.js';
// import booksData from '../../../assets/booksData.json'; // Import the dummy data
import './SearchResultsSection.css';
import { fetchAllBooks } from '../../../ApiCalls.js'

const SearchResultsSection = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //TODO: Use API GET books endpoint

    fetchAllBooks()
      .then(data => setBooks(data))
      .catch(error => console.error('Error setting books:', error));

    //Mock
    // setBooks(booksData);
  }, []);




  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h3 className="search-results-header">Search Results</h3>
      {/* Pass filteredBooks instead of all books to BookGrid */}
      <BookGrid books={filteredBooks} />
    </div>
  );
};

export default SearchResultsSection;
