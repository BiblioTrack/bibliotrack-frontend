import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { AuthContextProvider } from '../pages/AuthPages/AuthContext.js';

import SignupSection from '../pages/AuthPages/SignupPage/components/SignupSection.js';

test('Test: Render SignupSection component with expected input fields', () => {
  render(
    <BrowserRouter>
    <AuthContextProvider>
      <SignupSection />
    </AuthContextProvider>
    </BrowserRouter>
  );

  // Assert that the form is present
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();

  // Assert that the input fields are present, have the correct type, and have the correct labels
  const inputFields = [
    { name: 'firstname', type: 'text' },
    { name: 'lastname', type: 'text'},
    { name: 'email', type: 'email' },
    { name: 'password', type: 'password' },
    { name: 'repeatPassword', type: 'password'},
  ];

  inputFields.forEach(({ name, type}) => {
    const inputElement = screen.getByTestId(name);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
  });

});


test('Test: empty form submission', () => {
  render(
    <BrowserRouter>
    <AuthContextProvider>
      <SignupSection />
    </AuthContextProvider>
    </BrowserRouter>
  );
  
   // Mock the alert function to check if it's called
   jest.spyOn(window, 'alert').mockImplementation(() => {});

   // Simulate form submission without filling out the form
   fireEvent.submit(screen.getByRole('form'));
   expect(window.alert).toHaveBeenCalled();
});


test('Test: form submission with valid data', () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <SignupSection />
      </AuthContextProvider>
    </BrowserRouter>
  );

  // Fill out the form with valid data
  fireEvent.change(screen.getByTestId('firstname'), { target: { value: 'John' } });
  fireEvent.change(screen.getByTestId('lastname'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByTestId('email'), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByTestId('password'), { target: { value: 'strongPassword' } });
  fireEvent.change(screen.getByTestId('repeatPassword'), { target: { value: 'strongPassword' } });

  // Mock the alert function to check if it's called
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission
  fireEvent.submit(screen.getByRole('form'));

  // Assert that alert is not called (since data is valid)
  expect(window.alert).not.toHaveBeenCalled();

  // TODO: you can check if the user is redirected to another page
});
