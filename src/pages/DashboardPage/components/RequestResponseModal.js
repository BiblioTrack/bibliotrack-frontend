// RequestResponseModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RequestResponseModal = ({ show, onClose, selectedRequest }) => {
  const [copyNumber, setCopyNumber] = useState('');

  const handleApprove = () => {
    // TODO: Implement logic for approving the request
    const issueData = {
        bookId: selectedRequest.bookId,
        copyNumber,
        userId : selectedRequest.userId,
        issueDate: selectedRequest.issueData,
        dueDate: selectedRequest.dueDate,
    };
  
    console.log(`Issuing copy: ${JSON.stringify(issueData)}`);
    onClose();
  };

  const handleReject = () => {
    // TODO: Implement logic for rejecting the request
    console.log(`Reject Request: ${JSON.stringify(selectedRequest)}`);
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
