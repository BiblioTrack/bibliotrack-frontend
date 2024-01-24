import React, { useEffect, useState } from 'react';
import Requests from './Requests.js';
import IssueHistoryUser from './IssueHistoryUser.js';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../AuthPages/AuthContext.js';
// import { fetchIssueHistorySingleUser, fetchIssueRequestsSingleUser } from '../../../ApiCalls.js';

const DashboardUser = () => {

  const { user } = useAuth();


  const [issueHistory, setIssueHistory] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      console.log('issue user', user)

      // Fetch issue history
      // const historyData = await fetchIssueHistorySingleUser(user);
      // setIssueHistory(historyData);

      // console.log('issue history', historyData)
      // const restructureHistoryData = (historyData) => {
      //   return historyData.map(requestHistory => ({
      //     userId: requestHistory.request.userId._id,
      //     userEmail: requestHistory.request.userId.email,
      //     bookName: requestHistory.request.bookId.name,
      //     copyNumber: requestHistory.request.copyNumber,
      //     issueDate: new Date(new Date(requestHistory.request.requestDate) + 7).toISOString().split('T')[0],
      //     dueDate: new Date(new Date(requestHistory.request.dueDate) + 7).toISOString().split('T')[0],
      //     returnDate: new Date(new Date(requestHistory.returnDate) + 7).toISOString().split('T')[0],
      //   }));
      // };
      // const restructuredHistoryDataList = restructureHistoryData(historyData);

      // setIssueHistory(restructuredHistoryDataList);


      // Fetch issue requests
      // const requestData = await fetchIssueRequestsSingleUser(user);
      // setIssueRequests(requestData); const restructureRequestData = (requestData) => {
      //   return requestData.map(request => ({
      //     requestId: request._id,
      //     userEmail: request.userId.email,
      //     bookName: request.bookId.name,
      //     copyNumber: request.copyNumber,
      //     issueDate: new Date(new Date(request.requestDate) + 7).toISOString().split('T')[0],
      //     dueDate: new Date(new Date(request.dueDate) + 7).toISOString().split('T')[0],
      //     status: request.status
      //   }));
      // };

      // const restructuredDataList = restructureRequestData(requestData);
      // console.log('request data', restructuredDataList)
      // setIssueRequests(restructuredDataList);

      // Mock
      // console.log(`Dashboard for user ${user}`)
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


  return (
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={issueRequests} />
      <IssueHistoryUser issueHistory={issueHistory} />
    </Container>
  );
}

export default DashboardUser;