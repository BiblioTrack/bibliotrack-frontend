// IssueHistorySection.js
import React from 'react';
import { Table } from 'react-bootstrap';

const calculateStatus = (issueDate, dueDate, returnDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);

  if (returnDate) {
    const returnDateObj = new Date(returnDate);
    return returnDateObj <= dueDateObj ? 'Returned' : 'Returned (Overdue)';
  } else {
    return dueDateObj < currentDate ? 'Overdue' : 'In Progress';
  }
};

const IssueHistory = ({ issueHistory }) => (
  <div className="mb-5">
    <h4>Issue History</h4>
    <Table striped bordered responsive>
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
        {issueHistory.map((issue, index) => (
          <tr key={index}>
            <td>{issue.userId}</td>
            <td>{issue.issueDate}</td>
            <td>{issue.dueDate}</td>
            <td>{issue.returnDate}</td>
            <td>{calculateStatus(issue.issueDate, issue.dueDate, issue.returnDate)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default IssueHistory;
