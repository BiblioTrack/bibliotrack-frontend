// ReturnModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MarkReturnedModal = ({ show, onClose, selectedIssue }) => {
    
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split('T')[0] 
  );

  const handleMarkReturned = () => {

     // Check if the return date is not empty
     if (!returnDate) {
        alert('Return date cannot be empty');
        return;
      }

    // Perform logic to mark issue as returned and set the return date
    console.log(`Marking ${selectedIssue} as returned`);
    console.log(JSON.stringify(returnDate));


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
            <Form.Control type="date" 
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="info" onClick={() => handleMarkReturned()}>
          Mark Returned
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MarkReturnedModal;
