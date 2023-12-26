// IssueHistorySection.js
import React from 'react';
import { Table } from 'react-bootstrap';

const IssueHistory = ({ issueHistory }) => (
  <div className="mb-5">
    <h4>Issue History</h4>
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Issue Date</th>
          <th>Return Date</th>
        </tr>
      </thead>
      <tbody>
        {issueHistory.map((issue, index) => (
          <tr key={index}>
            <td>{issue.userId}</td>
            <td>{issue.issueDate}</td>
            <td>{issue.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default IssueHistory;
