import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { AuthContextProvider } from '../pages/AuthPages/AuthContext.js';


import LoginSection from '../pages/AuthPages/LoginPage/components/LoginSection.js';

test('Test: render LoginSection component with expected input fields', () => {
  render(
  <BrowserRouter>
  <AuthContextProvider>
    <LoginSection />
  </AuthContextProvider>
  </BrowserRouter>
  );

  // Assert that the form is present
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();

  // Assert that the email input field is present
  const emailInput = screen.getByTestId('email');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');

  // Assert that the password input field is present
  const passwordInput = screen.getByTestId('password');
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute('type', 'password');
});

test('Test: invalid form submission', () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <LoginSection />
      </AuthContextProvider>
    </BrowserRouter>
  );

  const formElement = screen.getByRole('form');

   // Spy on window.alert
   const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission without entering email and password
  fireEvent.submit(formElement);
  expect(alertSpy).toHaveBeenCalledWith('Please enter both email and password.');
  alertSpy.mockRestore();

});

