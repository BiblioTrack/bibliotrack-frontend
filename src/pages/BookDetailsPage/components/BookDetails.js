// BookDetails.js

import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import IssueCopyModal from '../components/IssueCopyModal.js'; 

import { useAuth } from '../../AuthPages/AuthContext.js';
import './BookDetails.css'; 


const BookDetails = ({ book }) => {
  const { isAdmin } = useAuth();

  const [showIssueCopyModal, setShowIssueCopyModal] = useState(false);

  const handleShowIssueCopyModal = () => {
    setShowIssueCopyModal(true);
  };

  const handleHideIssueCopyModal = () => {
    setShowIssueCopyModal(false);
  };

  return (
    <Container className="book-details-container">
      <Row>
         {/* Image and Request Borrowing Button */}
         <Col lg={3} md={4} className="book-details-image text-center">
          <Image src={book.coverImage} alt={book.title} fluid className="bookcover-image" />
          {!isAdmin &&
            <Button variant="outline-dark" className="wide-button mt-3">
              Request Copy
            </Button>
          }
          {isAdmin &&
            <>
            <Button variant="outline-dark" className="wide-button mt-3">
              Edit Book
            </Button>
              <Button variant="outline-dark" className="wide-button mt-3" onClick={handleShowIssueCopyModal}>
                Issue Copy
              </Button>
               <IssueCopyModal
                show={showIssueCopyModal}
                onHide={handleHideIssueCopyModal}
                bookId={book.id}
              />
              
             
            </>
          }
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
