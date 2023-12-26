// BookDetails.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookImageAndButtons from './BookImageAndButtons.js';
import BookInfo from './BookInfo.js';
import IssueHistory from './IssueHistory.js';
import { useAuth } from '../../AuthPages/AuthContext.js';
import './Book.css'; 


const Book = ({ book }) => {
  const { isAdmin } = useAuth();

  
  // Dummy issue history for testing
  const dummyIssueHistory = [
    { userId: '123', issueDate: '2023-01-01', dueDate: '2023-01-15' },
    { userId: '456', issueDate: '2023-02-01', dueDate: '2023-02-15' },
    // Add more dummy data as needed
  ];


  return (
    <Container className="book-details-container">
      <Row>
        {/* Image and Request Borrowing Button */}
        <Col lg={3} md={4} className="book-details-image text-center">
          <BookImageAndButtons isAdmin={isAdmin} book={book} />
        </Col>

        <Col lg={9} md={8} className="book-details-info mt-5 mt-md-0">
          {/* Book Info */}
          <BookInfo book={book} />

          <hr className="my-5" />

          {/* Add more details as needed */}
          {isAdmin &&
            <IssueHistory issueHistory={dummyIssueHistory} />
          }

        </Col>
      </Row>
    </Container>
  );
};

export default Book;
