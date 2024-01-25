import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';
import RequestResponseModal from './RequestResponseModal';
import RequestDeleteModal from './RequestDeleteModal.js'
import { useAuth } from '../../../pages/AuthPages/AuthContext.js';


const Requests = ({ requests, onUpdate }) => {
  const { isAdmin } = useAuth();

  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [updatedRequests, setUpdatedRequests] = useState(requests);

  const handleCloseResponseModal = () => setShowResponseModal(false);
  const handleShowResponseModal = (request) => {
    console.log(request)
    setSelectedRequest(request);
    setShowResponseModal(true);
  };

  useEffect(() => {
    // Update the table when the requests prop changes
    setUpdatedRequests(requests);

  }, [requests]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (request) => {
    setSelectedRequest(request);
    setShowDeleteModal(true);
  };

  const handleUpdateRequests = async (updatedRequest) => {
    const updatedRequestsCopy = await [...updatedRequests];
    const index = updatedRequestsCopy.findIndex((r) => r.requestId === updatedRequest.requestId);
    if (index !== -1) {
      updatedRequestsCopy[index] = updatedRequest;
      setUpdatedRequests(updatedRequestsCopy);
    }
    onUpdate(); // notify parent 
  };

  return (
    <div className="mb-5">
      <h5 className="mb-3">Issue Requests</h5>

      <Table bordered responsive style={{ whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Book Name</th>
            {isAdmin && <th>User Email</th>}
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {updatedRequests.map((request, index) => {

            const isClickable = request.status === 'Pending';

            return (
              <tr
                key={index}
                onClick={() => {
                  if (isAdmin) {
                    // Admin action
                    isClickable && handleShowResponseModal(request);
                  } else {
                    // Non-admin action
                    isClickable && handleShowDeleteModal(request);
                  }
                }}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <td>{request.requestId}</td>
                <td>
                    {request.bookName}
                </td>

                {isAdmin && <td>{request.userEmail}</td>}
                <td>{request.issueDate}</td>
                <td>{request.dueDate}</td>
                <td style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {request.status === 'Approved' ? (
                    <span>✔️ Approved</span>
                  ) : (
                    request.status === 'Pending' ? <span >⏳  Pending</span> : <span >❌ Rejected</span>
                  )}
                  {isAdmin && isClickable && (<PencilSquare style={{ margin: '0px 10px' }} />)}
                  {!isAdmin && isClickable && (<Trash3 style={{ margin: '0px 10px' }} />)}

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {isAdmin && <RequestResponseModal show={showResponseModal} onClose={handleCloseResponseModal} onUpdateRequests={handleUpdateRequests} selectedRequest={selectedRequest} />}
      {!isAdmin && <RequestDeleteModal show={showDeleteModal} onClose={handleCloseDeleteModal} onUpdateRequests={handleUpdateRequests} selectedRequest={selectedRequest} />}

    </div>
  );
};

export default Requests;
