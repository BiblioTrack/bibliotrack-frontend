import React, { useEffect, useState } from 'react';
import Requests from './Requests.js';
import IssueHistoryUser from './IssueHistoryUser.js';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../AuthPages/AuthContext.js';


const DashboardUser = () =>{

  const { user } = useAuth();

   
  const [issueHistory, setIssueHistory] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      /*
        // Fetch issue history
        const historyData = await fetchIssueHistorySingleUser(user.id);
        setIssueHistory(historyData);

        // Fetch issue requests
        const requestData = await fetchIssueRequestsSingleUser(user.id);
        setIssueRequests(requestData);
      */

      // Mock
      console.log(`Dashboard for user ${user}`)
      const dummyIssueHistory = [
        { userId: '123', bookId: '1', copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
        { userId: '123', bookId: '1', copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
        { userId: '123', bookId: '33', copyNumber: '444', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
      ];

      const dummyIssueRequests = [
        { userId: '123', bookId: '1', issueDate: '2023-01-01', dueDate: '2023-01-15', status: 'Pending' },
        { userId: '123', bookId: '2', issueDate: '2023-01-02', dueDate: '2023-01-16', status: 'Rejected' },
        { userId: '123', bookId: '1', issueDate: '2023-01-03', dueDate: '2023-01-17', status: 'Approved' },
      ];

      setIssueHistory(dummyIssueHistory);
      setIssueRequests(dummyIssueRequests);
    };

    fetchData();
  }, [user]);  
  
    
    return(
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={issueRequests}/>
      <IssueHistoryUser issueHistory={issueHistory} />
    </Container>
    );
}

export default DashboardUser;