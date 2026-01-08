import React from "react";
import { Link } from "react-router";

function Blog() {
  return (
    <>
      <ul>
        <Link to={"blog-1"}>
          <li>Blog 1</li>
        </Link>

        <Link to={"blog-2"}>
          <li>Blog 2</li>
        </Link>

        <Link to={"blog-3"}>
          <li>Blog 3</li>
        </Link>
      </ul>
    </>
  );
}

export default Blog;
