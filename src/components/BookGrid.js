import React from 'react';
import BookCard from './BookCard'; // Import the new BookCard component
import './BookGrid.css';

const BookGrid = ({ books, onBookClick }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onBookClick={onBookClick} />
      ))}
    </div>
  );
};

export default BookGrid;
