// LoginForm.test.js

import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should fill in form fields', () => {
    render(<LoginForm />);
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
  
    fireEvent.change(usernameInput, { target: { value: 'Varun' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    expect(usernameInput.value).toBe('Varun');
    expect(passwordInput.value).toBe('12345');
  });

  it('should trigger form submission', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);
   
    expect(mockSubmit).toHaveBeenCalledWith({
      username: '',
      password: '',
    });
  });
});
