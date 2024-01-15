import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const IssueCopyModal = ({ show, onHide, bookId }) => {
  const [copyNumber, setCopyNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split('T')[0] 
  );
  const [dueDate, setDueDate] = useState(
    new Date(new Date()+7).toISOString().split('T')[0]
  );

  const handleIssueCopy = () => {

    //Validate that userId and CopyNumber aren't empty
    if (!userId.trim()) {
      alert('User ID acannot be empty');
      return;
    }

    if (!copyNumber.trim()) {
      alert('Copy Number cannot be empty');
      return;
    }

     // Validate return date and issue date
     if (!dueDate || !issueDate) {
        alert('Issue and due date cannot be empty');
        return;
      }
     else if (new Date(dueDate) < new Date(issueDate)) {
        alert('Due date must be after issue date');
        return;
      }

    // TODO: IssueCopy API Call
    const issueData = {
      bookId,
      copyNumber,
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
        <Modal.Title>Issue Copy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="userId" className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="copyNumber" className="mb-3">
            <Form.Label>Copy Number</Form.Label>
            <Form.Control
              type="text"
              value={copyNumber}
              onChange={(e) => setCopyNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="issueDate" className="mb-3">
            <Form.Label>Issue Date</Form.Label>
            <Form.Control
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dueDte" className="mb-3">
            <Form.Label>Due Date</Form.Label>
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
          Issue Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueCopyModal;
