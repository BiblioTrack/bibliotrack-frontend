import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RequestCopyModal = ({ show, onHide, bookId }) => {
  //TODO: get userId
  const [userId] = useState('');
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split('T')[0] 
  );
  const [dueDate, setDueDate] = useState(
    new Date(new Date()+7).toISOString().split('T')[0]
  );

  const handleIssueCopy = () => {

    const maxBorrowDays = 14; // Maximum allowed days for borrowing


     if (!dueDate || !issueDate) {
        alert('Issue and due date cannot be empty');
        return;
      }
     else if (new Date(dueDate) < new Date(issueDate)) {
        alert('Return date must be after issue date');
        return;
      }
      else if (new Date(dueDate) - new Date(issueDate) > maxBorrowDays * 24 * 60 * 60 * 1000) {
        console.log(new Date(dueDate) - new Date(issueDate) );
        alert(`You can't request a book for more than ${maxBorrowDays} days`);
        return;
      }

    // TODO: onRequestCopy API
    const issueData = {
      bookId,
      userId,
      issueDate,
      dueDate,
    };

    console.log(`Issuing copy: ${JSON.stringify(issueData)}`);

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Request Copy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          
          <Form.Group controlId="issueDate" className="mb-3">
            <Form.Label>Issue Date</Form.Label>
            <Form.Control
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dueDte" className="mb-3">
            <Form.Label>Return Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="info" onClick={handleIssueCopy}>
          Request Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestCopyModal;
