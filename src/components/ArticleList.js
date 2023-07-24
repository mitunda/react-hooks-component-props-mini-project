// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Article from "../components/Article"; // Import the Article component as the default export

// test("renders a <article> element", () => {
//   const { container } = render(
//     <Article
//       title={"Components 101"}
//       date={"December 15, 2020"}
//       // Add any other necessary props here
//     />
//   );

//   // Your test logic here
// });


import React from 'react';
import Article from './Article'; // Import the Article component if it's used in the ArticleList component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} /> // Assuming the Article component is used and props are spread
      ))}
    </main>
  );
}

export default ArticleList; // Export the component correctly
