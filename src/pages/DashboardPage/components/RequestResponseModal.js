// RequestResponseModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { approveBookRequest, rejectBookRequest } from '../../../ApiCalls'
import { useAuth } from '../../AuthPages/AuthContext.js';

const RequestResponseModal = ({ show, onClose, onUpdateRequests, selectedRequest }) => {
  const { user } = useAuth();
  const [copyNumber, setCopyNumber] = useState('');

  const handleApprove = async () => {
    try {
      // TODO: Implement logic for approving the request
      const updateData = {
        status: 'Approved',
      };

      // Call the approveBookRequest function and wait for it to complete
      await approveBookRequest(selectedRequest.requestId, updateData, user);

      // Notify the parent component about the updated request
      onUpdateRequests({
        ...selectedRequest,
        status: 'Approved',
      });

      onClose();
    } catch (error) {
      console.error('Error approving request:', error.message);
      alert('Failed to approve request. Please try again.');
    }
  };

  const handleReject = async () => {
    try {
      // TODO: Implement logic for approving the request
      const updateData = {
        status: 'Rejected',
      };

      // Call the approveBookRequest function and wait for it to complete
      await rejectBookRequest(selectedRequest.requestId, updateData, user);

      // Notify the parent component about the updated request
      onUpdateRequests({
        ...selectedRequest,
        status: 'Rejected',
      });

      onClose();
    } catch (error) {
      console.error('Error approving request:', error.message);
      alert('Failed to approve request. Please try again.');
    }
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
