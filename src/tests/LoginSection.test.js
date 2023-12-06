import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

import LoginSection from '../pages/AuthPages/LoginPage/components/LoginSection.js';

test('renders LoginSection component with form, email, and password input fields', () => {
  render(
    <BrowserRouter>
      <LoginSection />
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

// Optionally, you can add more specific tests for form submission and other interactions
test('handles form submission', () => {
  render(
    <BrowserRouter>
      <LoginSection />
    </BrowserRouter>
  );
  const formElement = screen.getByRole('form');

  // Simulate form submission
  fireEvent.submit(formElement);

  // Add assertions based on the component's behavior after the form submission
});
