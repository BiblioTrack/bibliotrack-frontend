import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const IssueCopyModal = ({ show, onHide , bookId}) => {
  const [copyNumber, setCopyNumber] = useState('');
  const [borrowerId, setBorrowerId] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleIssueCopy = () => {
    // Perform any validation or additional logic as needed
    // Then, call the onIssueCopy function to handle the issuance
    const issueData = {
      bookId,
      copyNumber,
      borrowerId,
      issueDate,
      returnDate,
    };

    console.log(`Issuing copy : ${issueData}`);

    // Close the modal after issuing the copy
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Issue Copy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="copyNumber"  className="mb-3" >
            <Form.Label>Copy Number</Form.Label>
            <Form.Control
              type="text"
              value={copyNumber}
              onChange={(e) => setCopyNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="borrowerId"  className="mb-3" >
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              value={borrowerId}
              onChange={(e) => setBorrowerId(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="issueDate"  className="mb-3" >
            <Form.Label>Issue Date</Form.Label>
            <Form.Control
              type="text"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="returnDate"  className="mb-3" >
            <Form.Label>Return Date</Form.Label>
            <Form.Control
              type="text"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="info" onClick={handleIssueCopy}>
          Issue Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueCopyModal;
