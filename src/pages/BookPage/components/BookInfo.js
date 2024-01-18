// BookDetailsInfo.js
import React from 'react';
import { Badge } from 'react-bootstrap';

const BookInfo = ({ book }) => (
  <>
    <div className="unique-title mb-2">{book.name}</div>
    <div className="unique-author mb-2">{book.author}</div>
    <div className="mb-2">
      {book.genres.map((genre, index) => (
        <Badge key={index} pill bg="light" text="dark" className="genre-badge mr-1">
          {genre}
        </Badge>
      ))}
    </div>
    <p className="mb-3">{book.description}</p>
    <p><strong>Pages:</strong> {book.pages}</p>
    <p><strong>Format:</strong> {book.format}</p>
    <p><strong>Total Copies:</strong> {book.totalCopies}</p>
    <p><strong>Available Copies:</strong> {book.availableCopies}</p>
    <p><strong>Publication Date:</strong> {book.publicationDate}</p>
  </>
);

export default BookInfo;
