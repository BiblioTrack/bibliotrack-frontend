import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';
import RequestResponseModal from './RequestResponseModal';

const RequestsAdmin = ({ requests }) => {
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleCloseResponseModal = () => setShowResponseModal(false);
  const handleShowResponseModal = (issue) => {
    setSelectedRequest(issue);
    setShowResponseModal(true);
  };


 

  return (
    <div className="mb-5">
      <h5 className="mb-3">Issue Requests</h5>

      <Table bordered responsive style={{ whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>User ID</th>
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
                onClick={() => isClickable && handleShowResponseModal(request)}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <td>{request.bookId}</td>
                <td>{request.userId}</td>
                <td>{request.issueDate}</td>
                <td>{request.dueDate}</td>
                <td style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {request.status === 'Approved' ? (
                      <span>✔️ Approved</span>
                    ) : (
                      request.status === 'Pending'? <span >⏳  Pending</span> :<span >❌ Rejected</span>
                    )}
                    {isClickable && (<PencilSquare style={{ margin: '0px 10px' }} /> )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <RequestResponseModal show={showResponseModal} onClose={handleCloseResponseModal} selectedRequest={selectedRequest} />
    </div>
  );
};

export default RequestsAdmin;
