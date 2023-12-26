// BookDetails.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookImageAndButtons from './BookImageAndButtons.js';
import BookInfo from './BookInfo.js';
import { useAuth } from '../../AuthPages/AuthContext.js';
import './Book.css'; 


const Book = ({ book }) => {
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
          <BookInfo book={book} />
          {/* Add more details as needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
