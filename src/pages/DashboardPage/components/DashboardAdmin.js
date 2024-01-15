import React, { useEffect, useState } from 'react';
import Requests from './Requests.js';
import IssueHistoryAdmin from '../components/IssueHistoryAdmin.js';
import { Container } from 'react-bootstrap';

const DashboardAdmin = () =>{

  const [issueHistory, setIssueHistory] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      /*
        // Fetch issue history
        const historyData = await fetchIssueHistory();
        setIssueHistory(historyData);

        // Fetch issue requests
        const requestData = await fetchIssueRequests();
        setIssueRequests(requestData);
      */

      // Mock
      const dummyIssueHistory = [
        { userId: '123', bookId: '1', copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
        { userId: '456', bookId: '1', copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null },
        { userId: '789', bookId: '1', copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null },
        { userId: '123', bookId: '1', copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
        { userId: '789', bookId: '2', copyNumber: '555', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null },
        { userId: '123', bookId: '33', copyNumber: '444', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
      ];

      const dummyIssueRequests = [
        { userId: '123', bookId: '1', issueDate: '2023-01-01', dueDate: '2023-01-15', status: 'Pending' },
        { userId: '456', bookId: '2', issueDate: '2023-01-02', dueDate: '2023-01-16', status: 'Rejected' },
        { userId: '789', bookId: '1', issueDate: '2023-01-03', dueDate: '2023-01-17', status: 'Approved' },
      ];

      setIssueHistory(dummyIssueHistory);
      setIssueRequests(dummyIssueRequests);
    };

    fetchData();
  }, []);  

  
    
    return(
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={issueRequests}/>
      <IssueHistoryAdmin issueHistory={issueHistory} />
    </Container>
    );
}

export default DashboardAdmin;