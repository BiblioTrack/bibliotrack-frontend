// RequestResponseModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RequestDeleteModal = ({ show, onClose, selectedRequest }) => {

 
  const handleDelete = () => {
    // Update the backend and handle other necessary actions
    // Don't forget to close the modal
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Are you sure you want to delete this request?</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestDeleteModal;
