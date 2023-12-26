// BookDetails.js

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import BookImageAndButtons from './BookImageAndButtons.js';
import { useAuth } from '../../AuthPages/AuthContext.js';
import './Book.css'; 


const BookDetails = ({ book }) => {
  const { isAdmin } = useAuth();

  return (
    <Container className="book-details-container">
      <Row>
        {/* Image and Request Borrowing Button */}
        <Col lg={3} md={4} className="book-details-image text-center">
          <BookImageAndButtons isAdmin={isAdmin} book={book} />
        </Col>

        {/* Book Details */}
        <Col lg={9} md={8} className="book-details-info mt-5 mt-md-0">
          <div className="unique-title mb-2">{book.title}</div>
          <div className="unique-author mb-2">{book.author}</div>
          <div className="mb-2">
            {book.genres.map((genre, index) => (
              <Badge key={index} pill bg="light" className="genre-badge mr-1">
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
          {/* Add more details as needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
