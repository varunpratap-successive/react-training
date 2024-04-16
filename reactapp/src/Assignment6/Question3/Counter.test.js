
import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Counter from './Counter';

test('Counter has Increment and Decrement button', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  const decrementButton = screen.getByText('Decrement');
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('Counter when increment and decrement button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  const decrementButton = screen.getByText('Decrement');
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(incrementButton).toBeInTheDocument();
  const countDisplay1 = screen.getByText('Counter: 2');
  expect(countDisplay1).toBeInTheDocument();
  fireEvent.click(decrementButton);
  const countDisplay2 = screen.getByText('Counter: 1');
  expect(countDisplay2).toBeInTheDocument();
});
  // const countDisplay = getByText('Counter: 0');
  // expect(countDisplay).toHaveTextContent('Counter: 1');