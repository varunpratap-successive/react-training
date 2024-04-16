// UserProfile.test.js

import React from 'react';
import { render ,screen} from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user profile information', () => {
    const user = {
        name: 'Varun Pratap',
        email: 'varun1@gmail.com',
        phoneNumber: '123-456-7890',
      };

   render(<UserProfile {...user} />);
  

  expect(screen.getByText(/Varun Pratap/i)).toBeInTheDocument();
  expect(screen.getByText(/varun1@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
});
