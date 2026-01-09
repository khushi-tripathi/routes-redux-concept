import React from "react";
import { Link, useOutletContext } from "react-router";

function Blog() {
  const data = useOutletContext();
  console.log("DATA OUTLET :: ", data);
  return (
    <>
      <h3>Outlet data which we are passing from context - </h3>
      <h4>{data.name}</h4>
      <h4>{data.designation}</h4>
      <h4>{data.company}</h4>
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
