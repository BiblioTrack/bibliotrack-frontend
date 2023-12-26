// BookDetailsPage.js
import React from 'react';

import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';

import { useParams } from 'react-router-dom';
import BookDetails from './components/Book.js';
import booksData from '../../assets/booksData.json';

const BookDetailsPage = () => {

  const { id } = useParams();
  
  //TODO: Use API GET book endpoint
  const selectedBook = booksData.find((book) => book.id.toString() === id);

  return (
    <>
      <TopNavbar/>
      <VerticalSpace margin={30} />     
      {selectedBook ? <BookDetails book={selectedBook} /> : <p>Book not found</p>}
    </>
  );
};

export default BookDetailsPage;
