// IssueHistorySection.js
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import IssueReturnModal from './IssueReturnModal';

const calculateStatus = (dueDate, returnDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);

  if (returnDate) {
    return "✔️ Returned"
  } else {
    return dueDateObj < currentDate ? '⚠️ Overdue' : '🔄 In Progress';
  }
};



const IssueHistory = ({ issueHistory }) => {

    const [showReturnModal, setShowReturnModal] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
  
    const handleCloseReturnModal = () => setShowReturnModal(false);
    const handleShowReturnModal = (issue) => {
      setSelectedIssue(issue);
      setShowReturnModal(true);
    };  

    return(
    <div className="mb-5">
        <h5 className="mb-3">Issue History</h5>
        <Table bordered responsive>
        <thead>
            <tr>
            <th>User ID</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {issueHistory.map((issue, index) => {
            const status = calculateStatus(issue.dueDate, issue.returnDate);

            return (
                <tr
                    key={index}
                    onClick={() => handleShowReturnModal(issue)}
                    style={{ cursor: 'pointer' }}
                >
                <td>{issue.userId}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.dueDate}</td>
                <td>{issue.returnDate}</td>
                <td>{status}</td>
                </tr>
            );
        })}
        </tbody>
        </Table>

        <IssueReturnModal show={showReturnModal} onClose={handleCloseReturnModal} selectedIssue={selectedIssue}/>

    </div>
    );
}

export default IssueHistory;
