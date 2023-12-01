// BookDetails.js

import React from 'react';
import './BookDetails.css'; // Import your custom CSS file
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';

const BookDetails = ({ book }) => {
  return (
    <Container className="book-details-container">
      <Row>
         {/* Image and Request Borrowing Button */}
         <Col lg={3} md={4} className="book-details-image text-center">
          <Image src={book.coverImage} alt={book.title} fluid className="bookcover-image" />
          <Button variant="outline-dark" className="request-button w-100">
            Request Copy
          </Button>
        </Col>

        {/* Book Details */}
        <Col lg={9} md={8} className="book-details-info mt-5 mt-md-0">
          <div className="unique-title">{book.title}</div>
          <div className="unique-author">{book.author}</div>
          <div className="genre-badges">
            {book.genres.map((genre, index) => (
              <Badge key={index} pill bg="light" className="genre-badge">
                {genre}
              </Badge>
            ))}
          </div>
          <p className="description">{book.description}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Format:</strong> {book.format}</p>
          <p><strong>Available Copies:</strong> {book.availableCopies}</p>
          <p><strong>Publication Date:</strong> {book.publicationDate}</p>
          {/* Add more details as needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
