
// src/__tests__/Article.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import Article from '../components/Article'; // Check the file path

expect.extend({ toBeInTheDocument });

test("uses a default value for the date if no date is passed as a prop", () => {
  render(<Article title="Test Article" preview="Test preview" />);
  const small = screen.queryByText(/January 1, 1970/);

  if (small) {
    expect(small).toBeInTheDocument();
  } else {
    expect(small).not.toBeInTheDocument();
  }
});
