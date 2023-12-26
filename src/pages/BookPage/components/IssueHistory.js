import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';
import IssueReturnModal from './IssueReturnModal';

const calculateStatus = (dueDate, returnDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);

  if (returnDate) {
    return '✔️ Returned';
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

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  const filteredIssueHistory = issueHistory.filter((issue) => {
    // Apply search filter
    const matchesSearch =
      issue.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.issueDate.includes(searchQuery) ||
      issue.dueDate.includes(searchQuery) ||
      (issue.returnDate && issue.returnDate.includes(searchQuery));

    // Apply additional filters based on filter criteria (e.g., 'all', 'returned', 'overdue', 'inProgress')
    const matchesFilter =
      filterCriteria === 'all' ||
      (filterCriteria === 'returned' && issue.returnDate) ||
      (filterCriteria === 'overdue' && !issue.returnDate && new Date(issue.dueDate) < new Date()) ||
      (filterCriteria === 'inProgress' && !issue.returnDate && new Date(issue.dueDate) >= new Date());

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mb-5">
      <h5 className="mb-3">Issue History</h5>
      <Form className="mb-3">
        <div className="row">
          <Form.Group controlId="searchQuery" className="col-md-8 mb-3 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Search by user ID, issue, due, or return date"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="filterCriteria" className="col-md-4">
            <Form.Control
              as="select"
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
            >
              <option value="all">All</option>
              <option value="returned">Returned</option>
              <option value="overdue">Overdue</option>
              <option value="inProgress">In Progress</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Form>


      <Table bordered responsive style={{ whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Copy Num.</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssueHistory.map((issue, index) => {
            const status = calculateStatus(issue.dueDate, issue.returnDate);
            const isClickable = status === '⚠️ Overdue' || status === '🔄 In Progress';

            return (
              <tr
                key={index}
                onClick={() => isClickable && handleShowReturnModal(issue)}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <td>{issue.userId}</td>
                <td>{issue.copyNumber}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.dueDate}</td>
                <td>{issue.returnDate}</td>
                <td style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {status}
                  {isClickable && (
                    <PencilSquare
                      style={{ margin: '0px 10px' }}
                      onClick={() => handleShowReturnModal(issue)}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <IssueReturnModal show={showReturnModal} onClose={handleCloseReturnModal} selectedIssue={selectedIssue} />
    </div>
  );
};

export default IssueHistory;
