// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import About from "../components/About";
// import logo from "../assets/logo"

// test("renders a <aside> element", () => {
//   const { container } = render(<About />);
//   expect(container.querySelector("aside")).toBeInTheDocument();
// });

// test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
//   render(<About image={logo} />);
//   const img = screen.queryByAltText("blog logo");
//   expect(img).toBeInTheDocument();
//   expect(img.src).toContain(logo);
// });

// test("uses a default value for the image if no image is passed as a prop", () => {
//   render(<About />);
//   const img = screen.queryByAltText("blog logo");
//   expect(img).toBeInTheDocument();
//   expect(img.src).toContain("https://via.placeholder.com/215");
// });

// test("renders a <p> with the about text", () => {
//   render(<About about="About this blog" />);
//   const p = screen.queryByText("About this blog");
//   expect(p).toBeInTheDocument();
//   expect(p.tagName).toBe("P");
// });


// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import About from "../components/About";
// import logo from "../assets/logo";

// test("renders a <aside> element", () => {
//   render(<About />);
//   const asideElement = screen.queryByTestId("aside-element"); // Use queryByTestId to find the <aside> element

//   expect(asideElement).toBeInTheDocument();
// });

// test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
//   render(<About image={logo} />);
//   const img = screen.queryByAltText("blog logo");

//   expect(img).toBeInTheDocument();
//   expect(img.src).toContain(logo);
// });

// test("uses a default value for the image if no image is passed as a prop", () => {
//   render(<About />);
//   const img = screen.queryByAltText("blog logo");

//   expect(img).toBeInTheDocument();
//   expect(img.src).toContain("https://via.placeholder.com/215");
// });

// test("renders a <p> with the about text", () => {
//   render(<About about="About this blog" />);
//   const p = screen.queryByText("About this blog");

//   expect(p).toBeInTheDocument();
//   expect(p.tagName).toBe("P");
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img?.src).toContain("https://via.placeholder.com/215"); // Add a null check using optional chaining
});
