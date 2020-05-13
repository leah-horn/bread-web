/* global test, expect */
import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('renders landing text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/new user/i);
  expect(linkElement).toBeInTheDocument();

  const recipeLinkElement = getByText(/recipies/i);
  expect(recipeLinkElement).toBeInTheDocument();
});
