import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


import AddBookSection from '../pages/AddBookPage/components/AddBookSection.js';

describe('AddBookSection Component', () => {
  it('renders without crashing', () => {
    render(<AddBookSection />);
  });

  it('submits the form with valid data', () => {
    const { getByLabelText, getByText } = render(<AddBookSection />);

    // Fill in the form with valid data
    fireEvent.change(getByLabelText(/title/i), { target: { value: 'Sample Title' } });
    fireEvent.change(getByLabelText(/author/i), { target: { value: 'Sample Author' } });
    fireEvent.change(getByLabelText(/isbn/i), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText(/category/i), { target: { value: 'Fiction' } });


    // Submit the form
    fireEvent.click(getByText(/submit/i));

    // TODO: Add assertions for the expected behavior after form submission
  });

  it('displays an alert with invalid form data', () => {
    const { getByLabelText, getByText } = render(<AddBookSection />);
    // Mock the alert function to check if it's called
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    // Fill in the form with invalid data
    fireEvent.change(getByLabelText(/title/i), { target: { value: '' } });
    fireEvent.change(getByLabelText(/author/i), { target: { value: 'Sample Author' } });
    fireEvent.change(getByLabelText(/isbn/i), { target: { value: '1234567890' } });
    // fireEvent.change(getByLabelText(/category/i), { target: { value: '' } });

    // Submit the form
    fireEvent.click(getByText(/submit/i));

    // Check if an alert is displayed
    expect(window.alert).toHaveBeenCalled();

    // TODO: Add assertions for the expected behavior after displaying the alert
  });
});
