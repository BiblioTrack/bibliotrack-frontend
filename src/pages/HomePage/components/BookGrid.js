import React from 'react';
import BookCard from './BookCard'; // Import the new BookCard component
import { Link } from 'react-router-dom';
import './BookGrid.css';

const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <Link key={book._id} to={`/book/${book._id}`}>
          <BookCard key={book._id} book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookGrid;