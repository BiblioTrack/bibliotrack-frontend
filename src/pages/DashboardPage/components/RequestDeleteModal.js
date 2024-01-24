// RequestResponseModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteBookRequet } from '../../../ApiCalls';
import { useAuth } from '../../AuthPages/AuthContext';

const RequestDeleteModal = ({ show, onClose, selectedRequest }) => {
  // console.log(selectedRequest)
  const user = useAuth();
  const handleDelete = async () => {
    // TODO: Use Delete Request API call
    // console.log(user)
    await deleteBookRequet(selectedRequest.requestId, user.user);
    console.log(`Delete Request ${selectedRequest}`);
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
