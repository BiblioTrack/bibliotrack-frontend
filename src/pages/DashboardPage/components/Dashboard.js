import React from 'react';
import { useAuth } from '../../AuthPages/AuthContext.js';
import IssueHistoryAdmin from '../../../components/IssueHistoryAdmin';
import { Container } from 'react-bootstrap';

const Dashboard = ({}) => {

    const { isAdmin } = useAuth();

  
    // Dummy issue history for testing
    const dummyIssueHistory = [
      { userId: '123', bookId: '1' , copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
      { userId: '456', bookId: '1' , copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null},
      { userId: '789', bookId: '1' , copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null},
      { userId: '123', bookId: '1' , copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26'},
      { userId: '789', bookId: '2' , copyNumber: '555', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null},
      { userId: '123', bookId: '2' , copyNumber: '444', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26'},
    ];

    
    return(
    <Container>
    <h3 className='mb-5'>Dashboard</h3>

    {isAdmin &&
        <IssueHistoryAdmin issueHistory={dummyIssueHistory} />
    }
    </Container>
    );
}

export default Dashboard;