import React from 'react';
import BookCard from './BookCard'; // Import the new BookCard component
import { Link } from 'react-router-dom';
import './BookGrid.css';

const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <BookCard key={book.id} book={book}/>
        </Link>
      ))}
    </div>
  );
};

export default BookGrid;