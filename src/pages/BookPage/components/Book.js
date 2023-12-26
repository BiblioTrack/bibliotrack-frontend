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
    { userId: '123', bookId: '1' , copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
    { userId: '456', bookId: '1' , copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null},
    { userId: '789', bookId: '1' , copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null},
    { userId: '123', bookId: '1' , copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26'},
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
        </Col>
      </Row>
      <Row> <Col><hr className="my-5" /></Col></Row>
      <Row>
        {/* Add more details as needed */}
        {isAdmin &&
          <IssueHistory issueHistory={dummyIssueHistory} />
        }
      </Row>
    </Container>
  );
};

export default Book;
