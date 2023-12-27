// BookDetailsPage.js
import React, { useEffect, useState } from 'react';

import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';

import { useParams } from 'react-router-dom';
import Book from './components/Book.js';
import booksData from '../../assets/booksData.json';

const BookDetailsPage = () => {

  const { id } = useParams();

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    //TODO: Use API GET book/:id endpoint

    /*
    const fetchBook = async () => {
      try {
        // Replace the following with your actual API endpoint to fetch book details
        const response = await fetch(`/api/books/${id}`);
        const data = await response.json();

        setSelectedBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
    */
   
    //Mock
    setSelectedBook(booksData.find((book) => book.id.toString() === id));

  }, [id]);
  

  return (
    <>
      <TopNavbar/>
      <VerticalSpace margin={30} />     
      {selectedBook ? <Book book={selectedBook} /> : <p>Book not found</p>}
    </>
  );
};

export default BookDetailsPage;
