// BookDetailsPage.js
import React, { useEffect, useState } from 'react';

import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';

import { useParams } from 'react-router-dom';
import Book from './components/Book.js';
// import booksData from '../../assets/booksData.json';
import { fetchBook } from '../../ApiCalls.js'
import { useAuth } from '../AuthPages/AuthContext.js'; 
import {Navigate } from 'react-router-dom';

const BookDetailsPage = () => {


  const { id } = useParams();

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    //TODO: Use API GET book/:id endpoint
    const asyncFetchBook = async () => {
      const book = await fetchBook(id);
      setSelectedBook(book);
    };

    asyncFetchBook();


    //Mock
    // setSelectedBook(booksData.find((book) => book._id.toString() === id));

  }, [id]);

  const {user} = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <TopNavbar />
      <VerticalSpace margin={30} />
      {selectedBook ? <Book book={selectedBook} /> : <p>Book not found</p>}
    </>
  );
};

export default BookDetailsPage;
