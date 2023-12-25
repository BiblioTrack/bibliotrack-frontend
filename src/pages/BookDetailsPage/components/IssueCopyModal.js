import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const IssueCopyModal = ({ show, onHide }) => {
  const [copyNumber, setCopyNumber] = useState('');

  const handleIssueCopy = () => {
    // Perform any validation or additional logic as needed

    console.log(`Issuing copy number: ${copyNumber}`);


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
          <Form.Group controlId="copyNumber">
            <Form.Label>Copy Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter copy number"
              value={copyNumber}
              onChange={(e) => setCopyNumber(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleIssueCopy}>
          Issue Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueCopyModal;
