import React from 'react';
import { render, screen, act } from '@testing-library/react';
import SearchResultsSection from '../pages/HomePage/components/SearchResultsSection';
import booksData from '../assets/booksData.json';
import { fetchAllBooks } from '../ApiCalls';

// Mock the ApiCalls module
jest.mock('../ApiCalls');

// Mock the BookGrid component
jest.mock('../../src/pages/HomePage/components/BookGrid.js', () => ({ books }) => (
    <div data-testid="mocked-book-grid">
        {books.map(book => (
            <div key={book._id}>{book.title}</div>
        ))}
    </div>
));

describe('SearchResultsSection', () => {
    it('fetches books from API and renders the book grid', async () => {


        // Mock the fetchAllBooks function to return the mockedBooks
        fetchAllBooks.mockResolvedValueOnce(booksData);

        // Render the SearchResultsSection component
        await act(async () => {
            render(<SearchResultsSection searchQuery="" />);
        });

        // Ensure that the BookGrid is rendered with the fetched books
        const mockedBookGrid = screen.getByTestId('mocked-book-grid');
        expect(mockedBookGrid.children).toHaveLength(booksData.length);
    });

    it('filters books based on the search query', async () => {


        // Mock the fetchAllBooks function to return the mockedBooks
        fetchAllBooks.mockResolvedValueOnce(booksData);

        // Render the SearchResultsSection component with a search query
        await act(async () => {
            render(<SearchResultsSection searchQuery="Harper Lee" />);
        });

        // Ensure that the BookGrid is rendered with the filtered books
        const mockedBookGrid = screen.getByTestId('mocked-book-grid');
        expect(mockedBookGrid.children).toHaveLength(1);
    });

    // Add more test cases as needed
});
