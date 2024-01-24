import React, { useEffect, useState } from 'react';
import Requests from './Requests.js';
import IssueHistoryAdmin from '../components/IssueHistoryAdmin.js';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../AuthPages/AuthContext.js';
import { fetchIssueHistory, fetchIssueRequests, fetchRequestById } from '../../../ApiCalls.js';

const DashboardAdmin = () => {
  const { user } = useAuth();
  const [issueHistory, setIssueHistory] = useState([]);
  const [issueRequests, setIssueRequests] = useState([]);

  const restructureHistoryData = async (historyData) => {
    const restructuredData = await Promise.all(
      historyData.map(async (requestHistory) => {
        try {

          const request = await fetchRequestById(requestHistory.request._id, user);
          if (!request || !request.userId) {
            // Handle cases where request or userId is null
            return null;
          }

          const userData = request.userId;
          return {
            userId: userData._id,
            userEmail: userData.email,
            bookName: requestHistory.request?.bookId?.name || null,
            copyNumber: requestHistory.request?.copyNumber || null,
            issueDate: new Date(new Date(requestHistory.request?.requestDate) + 7).toISOString().split('T')[0],
            dueDate: new Date(new Date(requestHistory.request?.dueDate) + 7).toISOString().split('T')[0],
            returnDate: requestHistory.returnDate
              ? new Date(new Date(requestHistory.returnDate) + 7).toISOString().split('T')[0]
              : null,
          };
        } catch (error) {
          console.error('Error while fetching data:', error);
          return null;
        }
      })
    );

    return restructuredData.filter(Boolean); // Filter out null values
  };

  const fetchData = async () => {
    try {

      const historyData = await fetchIssueHistory(user);


      const restructuredHistoryDataList = await restructureHistoryData(historyData);

      setIssueHistory(restructuredHistoryDataList);

      // Fetch issue requests
      const requestData = await fetchIssueRequests(user);

      const restructureRequestData = (requestData) => {
        return requestData.map((request) => ({
          requestId: request._id,
          userEmail: request.userId?.email || null,
          bookName: request.bookId?.name || null,
          bookId: request.bookId?._id || null,
          copyNumber: request.copyNumber || null,
          issueDate: new Date(new Date(request.requestDate) + 7).toISOString().split('T')[0],
          dueDate: new Date(new Date(request.dueDate) + 7).toISOString().split('T')[0],
          status: request.status || null,
        }));
      };

      const restructuredDataList = restructureRequestData(requestData);

      setIssueRequests(restructuredDataList);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleRequestUpdate = async () => {
    try {
      // Fetch issue history
      const historyData = await fetchIssueHistory(user);


      const restructuredHistoryDataList = await restructureHistoryData(historyData);
      setIssueHistory(restructuredHistoryDataList);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  return (
    <Container>
      <h4 className='my-5'>Dashboard</h4>

      <Requests requests={issueRequests} onUpdate={handleRequestUpdate} />
      <IssueHistoryAdmin issueHistory={issueHistory} />
    </Container>
  );
};

export default DashboardAdmin;
