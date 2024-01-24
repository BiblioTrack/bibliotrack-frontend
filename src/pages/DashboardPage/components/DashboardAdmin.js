import React, { useEffect, useState } from 'react';
import Requests from './Requests.js';
import { useAuth } from '../../AuthPages/AuthContext.js';
import IssueHistoryAdmin from '../components/IssueHistoryAdmin.js';
import { Container } from 'react-bootstrap';
import { fetchIssueHistory, fetchIssueRequests } from '../../../ApiCalls.js';

const DashboardAdmin = () => {
  const { user } = useAuth();
  const [issueHistory, setIssueHistory] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);
  const fetchData = async (user) => {

    console.log('issue history', user.token)
    // TODO: Fetch issue history
    const historyData = await fetchIssueHistory(user);
    console.log('issue history', historyData)
    const restructureHistoryData = (historyData) => {
      return historyData.map(requestHistory => ({
        userId: requestHistory.request.userId._id,
        userEmail: requestHistory.request.userId.email,
        bookName: requestHistory.request.bookId.name,
        copyNumber: requestHistory.request.copyNumber,
        issueDate: new Date(new Date(requestHistory.request.requestDate) + 7).toISOString().split('T')[0],
        dueDate: new Date(new Date(requestHistory.request.dueDate) + 7).toISOString().split('T')[0],
        returnDate: new Date(new Date(requestHistory.returnDate) + 7).toISOString().split('T')[0],
      }));
    };
    const restructuredHistoryDataList = restructureHistoryData(historyData);

    setIssueHistory(restructuredHistoryDataList);

    // // TODO: Fetch issue requests
    const requestData = await fetchIssueRequests(user);


    const restructureRequestData = (requestData) => {
      return requestData.map(request => ({
        requestId: request._id,
        userEmail: request.userId.email,
        bookName: request.bookId.name,
        bookId: request.bookId._id,
        copyNumber: request.copyNumber,
        issueDate: new Date(new Date(request.requestDate) + 7).toISOString().split('T')[0],
        dueDate: new Date(new Date(request.dueDate) + 7).toISOString().split('T')[0],
        status: request.status
      }));
    };

    const restructuredDataList = restructureRequestData(requestData);
    console.log('request data', restructuredDataList)
    setIssueRequests(restructuredDataList);


    // Mock
    // const dummyIssueHistory = [
    //   { userId: '123', bookId: '1', copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
    //   { userId: '456', bookId: '1', copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null },
    //   { userId: '789', bookId: '1', copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null },
    //   { userId: '123', bookId: '1', copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
    //   { userId: '789', bookId: '2', copyNumber: '555', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null },
    //   { userId: '123', bookId: '33', copyNumber: '444', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
    // ];

    // const dummyIssueRequests = [
    //   { userId: '123', bookId: '1', issueDate: '2023-01-01', dueDate: '2023-01-15', status: 'Pending' },
    //   { userId: '456', bookId: '2', issueDate: '2023-01-02', dueDate: '2023-01-16', status: 'Rejected' },
    //   { userId: '789', bookId: '1', issueDate: '2023-01-03', dueDate: '2023-01-17', status: 'Approved' },
    // ];

    // setIssueHistory(dummyIssueHistory);
    // setIssueRequests(dummyIssueRequests);
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  const handleRequestUpdate = async () => {

    // TODO: Fetch issue history
    const historyData = await fetchIssueHistory(user);
    console.log('issue history', historyData)
    const restructureHistoryData = (historyData) => {
      return historyData.map(requestHistory => ({
        userId: requestHistory.request.userId._id,
        userEmail: requestHistory.request.userId.email,
        bookName: requestHistory.request.bookId.name,
        copyNumber: requestHistory.request.copyNumber,
        issueDate: new Date(new Date(requestHistory.request.requestDate) + 7).toISOString().split('T')[0],
        dueDate: new Date(new Date(requestHistory.request.dueDate) + 7).toISOString().split('T')[0],
        returnDate: new Date(new Date(requestHistory.returnDate) + 7).toISOString().split('T')[0],
      }));
    };
    const restructuredHistoryDataList = restructureHistoryData(historyData);

    setIssueHistory(restructuredHistoryDataList);
  }

  return (
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={issueRequests} onUpdate={handleRequestUpdate} />
      <IssueHistoryAdmin issueHistory={issueHistory} />
    </Container>
  );
}

export default DashboardAdmin;