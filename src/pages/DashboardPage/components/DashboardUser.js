import React from 'react';
import Requests from './Requests.js';
import IssueHistoryUser from './IssueHistoryUser.js';
import { Container } from 'react-bootstrap';

const DashboardUser = () =>{


  
    // Dummy issue history for testing
    const dummyIssueHistory = [
      { userId: '123', bookId: '1' , copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
      { userId: '123', bookId: '1' , copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null},
      { userId: '123', bookId: '1' , copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null},
    ];

    const dummyIssueRequests = [
        { userId: '123', bookId: '1' ,  issueDate: '2023-01-01', dueDate: '2023-01-15', status: 'Pending' },
        { userId: '123', bookId: '2' ,  issueDate: '2023-01-02', dueDate: '2023-01-16', status: 'Rejected' },
        { userId: '123', bookId: '1' ,  issueDate: '2023-01-03', dueDate: '2023-01-17', status: 'Approved' },

      ];
  
    
    return(
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={dummyIssueRequests}/>
      <IssueHistoryUser issueHistory={dummyIssueHistory} />
    </Container>
    );
}

export default DashboardUser;