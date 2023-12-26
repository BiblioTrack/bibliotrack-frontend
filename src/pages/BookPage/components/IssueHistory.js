// IssueHistorySection.js
import React, { useState } from 'react';
import { Table} from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';
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
            const isClickable = status === '⚠️ Overdue' || status === '🔄 In Progress';

            return (               
                <tr
                    key={index}
                    onClick={() => isClickable && handleShowReturnModal(issue)}
                    style={{ cursor: isClickable ? 'pointer' : 'default' }}
                >
                <td>{issue.userId}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.dueDate}</td>
                <td>{issue.returnDate}</td>
                <td style={{ display: 'flex',  justifyContent: 'space-between' }}>
                  {status}
                  {isClickable && (
                    <PencilSquare style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => handleShowReturnModal(issue)} />
                  )}
                </td>                </tr>
            );
        })}
        </tbody>
        </Table>

        <IssueReturnModal show={showReturnModal} onClose={handleCloseReturnModal} selectedIssue={selectedIssue}/>

    </div>
    );
}

export default IssueHistory;
