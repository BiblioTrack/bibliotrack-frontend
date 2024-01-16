import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResultsSection from '../pages/HomePage/components/SearchResultsSection'; // Adjust the path accordingly
import '@testing-library/jest-dom'; // Import this for additional matchers
import userEvent from '@testing-library/user-event'; // Import this for simulating user events
import booksData from '../assets/booksData.json';


// Mock the useEffect hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

// Mock the BookGrid component to avoid rendering its actual content
jest.mock('../../src/pages/HomePage/components/BookGrid.js', () => ({ books }) => (
    <div data-testid="mocked-book-grid">
      {books.map(book => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  ));

describe('SearchResultsSection', () => {
  it('Test: mock book grid', async () => {
     // Mock the setBooks function
     const setBooksMock = jest.fn();

     // Mock the useEffect hook to immediately invoke the effect callback
     React.useEffect.mockImplementationOnce((callback) => callback());
 
     // Mock the useState hook to provide initial data (booksData)
     jest.spyOn(React, 'useState').mockReturnValueOnce([booksData, setBooksMock]);
 
     render(<SearchResultsSection searchQuery="" />); 
     // Ensure that the BookGrid is initially rendered with 4 books.
     const initialMockedBookGrid = screen.getByTestId('mocked-book-grid');
     expect(initialMockedBookGrid.children).toHaveLength(booksData.length);
  });

  it('Test: filter books based on search query', async () => {
    const setBooksMock = jest.fn();

    React.useEffect.mockImplementationOnce((callback) => callback());

    jest.spyOn(React, 'useState').mockReturnValueOnce([booksData, setBooksMock]);

    render(<SearchResultsSection searchQuery="1984" />); 
    const initialMockedBookGrid = screen.getByTestId('mocked-book-grid');
    expect(initialMockedBookGrid.children).toHaveLength(1);
 });

  // Add more test cases as needed
});
