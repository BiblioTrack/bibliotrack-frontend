import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditBookModal from '../pages/BookPage/components/EditBookModal.js';

const mockBookData = {
    name: 'Sample Title',
    author: 'Sample Author',
    isbn: '1234567890',
    genres: 'Fiction',
    edition: '1st',
    publicationDate: '2022-01-01',
    editor: 'John Doe',
    publisher: 'XYZ Publications',
    copies: '5',
    pages: '300',
    shelf: 'A1',
    floor: '1',
    description: 'Sample description.',
};

describe('EditBookModal Component', () => {
    test('renders without crashing', () => {
        const handleClose = jest.fn();
        const handleUpdate = jest.fn();
        render(<EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} onUpdate={handleUpdate} />);
    });

    test('calls onHide when "Close" button is clicked', () => {
        const handleClose = jest.fn();
        const handleUpdate = jest.fn();
        const { getByText } = render(
            <EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} onUpdate={handleUpdate} />
        );

        fireEvent.click(getByText(/close/i));

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('calls fetch with the correct data when submit button is clicked', async () => {
        const handleClose = jest.fn();
        const handleUpdate = jest.fn();
        const { getByText, getByLabelText } = render(
            <EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} onUpdate={handleUpdate}
            />,
        );
        // Mocking the global fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );

        // Simulate user interactions
        fireEvent.click(getByText(/submit/i));

        // Wait for the asynchronous operations (if any) to complete
        await waitFor(() => { });

        // Expect that fetch was called with the correct data
        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:8080/api/books/1',
            expect.objectContaining({
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer null",
                },
            })
        );
    });



    test('updates state when input fields are changed', () => {
        const handleClose = jest.fn();
        const { getByTestId } = render(
            <EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} />
        );

        // fireEvent.change(getByLabelText(/name/i), { target: { value: 'New Title' } });
        fireEvent.change(getByTestId("bookNameTest"), { target: { value: 'New Title' } });

        expect(getByTestId("bookNameTest").value).toBe('New Title');
    });


});
