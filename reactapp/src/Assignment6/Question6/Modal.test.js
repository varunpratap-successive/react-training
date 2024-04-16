// src/components/__tests__/Modal.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('Modal opens and closes when triggered', () => {
  const { getByText } = render(
    <Modal isOpen={true} onClose={() => {}}>
      Modal Content
    </Modal>
  );

  // Check if modal content is visible
  expect(getByText('Modal Content')).toBeInTheDocument();

  // Trigger the close button
  fireEvent.click(getByText('Close'));

  // Check if modal content is no longer visible
  expect(getByText('Modal Content')).not.toBeInTheDocument();
});
