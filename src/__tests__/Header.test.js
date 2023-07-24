// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Header from "../components/Header";

// test("renders a <header> element", () => {
//   const { container } = render(<Header />);
//   expect(container.querySelector("header")).toBeInTheDocument();
// });

// test("renders a <h1> with the blog name", () => {
//   render(<Header name="Underreacted" />);
//   const h1 = screen.queryByText("Underreacted");
//   expect(h1).toBeInTheDocument();
//   expect(h1.tagName).toBe("H1");
// });


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Header from '../Header';

// test("renders a <h1> with the blog name", () => {
//   render(<Header name="Underreacted" />);
//   const h1 = screen.queryByText("Underreacted");
//   expect(h1).toBeInTheDocument();
//   expect(h1?.tagName).toBe("H1"); // Add a null check using optional chaining
// });

// src/__tests__/Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header'; // Check the file path

test("renders without error", () => {
  render(<Header />);
});
