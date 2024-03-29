// BookDetails.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookImageAndButtons from './BookImageAndButtons.js';
import BookInfo from './BookInfo.js';
// import IssueHistoryAdmin from '../../../pages/DashboardPage/components/IssueHistoryAdmin.js';
import { useAuth } from '../../AuthPages/AuthContext.js';
import './Book.css';
import { fetchBook } from '../../../ApiCalls.js'

const Book = ({ book }) => {

  const handleUpdate = async () => {

    const newbook = await fetchBook(book._id);
    console.log(newbook);
    setBookInfoData(newbook)
  };
  const { isAdmin } = useAuth();
  const [bookInfoData, setBookInfoData] = useState(book);
  // const { isAdmin, user } = useAuth();
  // const [issues, setIssues] = useState([]);


  // useEffect(() => {
  //   handleUpdate();
  // })
  //   //TODO: use fetchIssueHistorySingleBook logic here



  //   // Fetch issueHistory only if the user is an admin
  //   if (isAdmin) {
  //     const asyncfetchIssueHistorySingleBook = async () => {
  //       const issues = await fetchIssueHistorySingleBook(book._id, user);
  //       setIssues(issues);
  //     };

  //     asyncfetchIssueHistorySingleBook()
  //   }


  //   //Mock
  //   // Dummy issue history for testing
  //   // const dummyIssues = [
  //   //   { userId: '123', bookId: '1', copyNumber: '888', issueDate: '2023-01-01', dueDate: '2023-01-15', returnDate: '2023-01-14' },
  //   //   { userId: '456', bookId: '1', copyNumber: '999', issueDate: '2023-02-01', dueDate: '2023-02-15', returnDate: null },
  //   //   { userId: '789', bookId: '1', copyNumber: '777', issueDate: '2023-12-01', dueDate: '2023-12-28', returnDate: null },
  //   //   { userId: '123', bookId: '1', copyNumber: '666', issueDate: '2023-12-01', dueDate: '2023-12-25', returnDate: '2023-12-26' },
  //   // ];
  //   // setIssues(dummyIssues);

  // }, [isAdmin, book._id, user]);




  return (
    <Container className="book-details-container">
      <Row>
        {/* Image and Request Borrowing Button */}
        <Col lg={3} md={4} className="book-details-image text-center">
          <BookImageAndButtons isAdmin={isAdmin} book={book} onUpdate={handleUpdate} />
        </Col>

        <Col lg={9} md={8} className="book-details-info mt-5 mt-md-0">
          {/* Book Info */}
          <BookInfo book={bookInfoData} />
        </Col>
      </Row>
      <Row> <Col><hr className="my-5" /></Col></Row>
      {/* <Row>
        {isAdmin &&
          <IssueHistoryAdmin issueHistory={issues} showBookIdColumn={false} />
        }
      </Row> */}
    </Container>
  );
};

export default Book;
