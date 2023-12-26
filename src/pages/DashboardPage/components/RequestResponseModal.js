// RequestResponseModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RequestResponseModal = ({ show, onClose, selectedRequest }) => {
  const [copyNumber, setCopyNumber] = useState('');

  const handleApprove = () => {
    // Implement logic for approving the request
    // Update the backend and handle other necessary actions
    const issueData = {
        bookId: selectedRequest.bookId,
        copyNumber,
        userId : selectedRequest.userId,
        issueDate: selectedRequest.issueData,
        dueDate: selectedRequest.dueDate,
    };
  
    console.log(`Issuing copy: ${JSON.stringify(issueData)}`);
    // Don't forget to close the modal
    onClose();
  };

  const handleReject = () => {
    // Implement logic for rejecting the request
    // Update the backend and handle other necessary actions
    // Don't forget to close the modal
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Request Response</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group controlId="copyNumber">
              <Form.Label>Copy Number</Form.Label>
              <Form.Control
                type="text"
                value={copyNumber}
                onChange={(e) => setCopyNumber(e.target.value)}
              />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleApprove}>
          Approve
        </Button>
        <Button variant="danger" onClick={handleReject}>
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestResponseModal;
