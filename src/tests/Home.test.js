// Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/HomePage/HomePage.js';

test('renders Home component', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  // Assuming TopNavbar has a data-testid attribute
  const topNavbarElement = getByTestId('top-navbar');
  expect(topNavbarElement).toBeInTheDocument();
});
