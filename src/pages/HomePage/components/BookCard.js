// BookCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './BookCard.css'

const BookCard = ({ book }) => {
  return (
    <Card className="book-item" >
      <Card.Img variant="top" src={book.imageUrl} alt={book.name} />
      <Card.Body>
        <Card.Title className="book-title">{book.name}</Card.Title>
        <Card.Text>by {book.author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
