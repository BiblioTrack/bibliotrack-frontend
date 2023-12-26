// ReturnModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const IssueReturnModal = ({ show, onClose, selectedIssue }) => {
  const handleMarkReturned = (returnDate) => {
    // Perform logic to mark issue as returned and set the return date
    console.log(`Marking issue as returned with date: ${returnDate}`);

    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Mark Issue as Returned</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="returnDate">
            <Form.Label>Return Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="info" onClick={() => handleMarkReturned('selectedDate')}>
          Mark Returned
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueReturnModal;
