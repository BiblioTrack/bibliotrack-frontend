import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditBookModal from '../pages/BookPage/components/EditBookModal.js';

const mockBookData = {
    title: 'Sample Title',
    author: 'Sample Author',
    isbn: '1234567890',
    category: 'Fiction',
    edition: '1st',
    publishYear: '2022',
    editor: 'John Doe',
    publisher: 'XYZ Publications',
    copies: '5',
    pageCount: '300',
    shelf: 'A1',
    floor: '1',
    description: 'Sample description.',
};

describe('EditBookModal Component', () => {
    test('renders without crashing', () => {
        const handleClose = jest.fn();
        render(<EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} />);
    });

    test('calls onHide when "Close" button is clicked', () => {
        const handleClose = jest.fn();
        const { getByText } = render(
            <EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} />
        );

        fireEvent.click(getByText(/close/i));

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('calls handleBookEdit when "Submit" button is clicked', () => {
        const handleClose = jest.fn();
        const handleBookEdit = jest.fn();
        const { getByText } = render(
            <EditBookModal show={true} onHide={handleClose} onSubmit={handleBookEdit} bookId="1" bookData={mockBookData}
            />,
        );

        fireEvent.click(getByText(/submit/i));

        expect(handleBookEdit).toHaveBeenCalled();
    });

    test('updates state when input fields are changed', () => {
        const handleClose = jest.fn();
        const { getByLabelText } = render(
            <EditBookModal show={true} onHide={handleClose} bookId="1" bookData={mockBookData} />
        );

        fireEvent.change(getByLabelText(/title/i), { target: { value: 'New Title' } });

        expect(getByLabelText(/title/i).value).toBe('New Title');
    });


});
