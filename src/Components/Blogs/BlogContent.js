import React from "react";
import { useParams } from "react-router";

function BlogContent() {
  const params = useParams();
  console.log("Params : ", params);
  return (
    <>
      {params.id === "blog-3" && new Error()}
      <h1>Blog Content</h1>
      <h2>{params.id}</h2>
    </>
  );
}

export default BlogContent;
