import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { PencilSquare , Trash3 } from 'react-bootstrap-icons';
import RequestResponseModal from './RequestResponseModal';
import RequestDeleteModal from './RequestDeleteModal.js'
import { useAuth } from '../../../pages/AuthPages/AuthContext.js';


const Requests = ({ requests }) => {
  const { isAdmin } = useAuth();

  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleCloseResponseModal = () => setShowResponseModal(false);
  const handleShowResponseModal = (request) => {
    setSelectedRequest(request);
    setShowResponseModal(true);
  };


  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (request) => {
    setSelectedRequest(request);
    setShowDeleteModal(true);
  };

  return (
    <div className="mb-5">
      <h5 className="mb-3">Issue Requests</h5>

      <Table bordered responsive style={{ whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>Book ID</th>
            {isAdmin && <th>User ID</th>}
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => {

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
                <td>{request.bookId}</td>
                {isAdmin &&<td>{request.userId}</td>}
                <td>{request.issueDate}</td>
                <td>{request.dueDate}</td>
                <td style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {request.status === 'Approved' ? (
                      <span>✔️ Approved</span>
                    ) : (
                      request.status === 'Pending'? <span >⏳  Pending</span> :<span >❌ Rejected</span>
                    )}
                    {isAdmin && isClickable && (<PencilSquare style={{ margin: '0px 10px' }} /> )}
                    {!isAdmin && isClickable && (<Trash3 style={{ margin: '0px 10px' }} /> )}

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {isAdmin && <RequestResponseModal show={showResponseModal} onClose={handleCloseResponseModal} selectedRequest={selectedRequest} />}
      {!isAdmin && <RequestDeleteModal show={showDeleteModal} onClose={handleCloseDeleteModal} selectedRequest={selectedRequest} />}

    </div>
  );
};

export default Requests;