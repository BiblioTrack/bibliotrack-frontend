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
    <p><strong>ISBN:</strong> {book.isbn}</p>
    <p><strong>Pages:</strong> {book.pages}</p>
    <p><strong>Shelf:</strong> {book.shelf}</p>
    <p><strong>Floor:</strong> {book.floor}</p>
    <p><strong>Format:</strong> {book.format}</p>
    <p><strong>Edition:</strong> {book.edition}</p>
    <p><strong>Editor:</strong> {book.editor}</p>
    <p><strong>Publisher:</strong> {book.publisher}</p>
    <p><strong>Language:</strong> {book.language}</p>
    <p><strong>Copies:</strong> {book.copies}</p>
    <p><strong>Publication Date:</strong> {new Date(new Date(book.publicationDate) + 7).toISOString().split('T')[0]}</p>
  </>
);

export default BookInfo;
