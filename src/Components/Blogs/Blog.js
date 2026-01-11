import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router";
import { blogActions, blogSelector } from "../../redux/reducers/blogReducer";
// import { addBlog } from "../../redux/actions/blogActions";

function Blog() {
  const blogs = useSelector(blogSelector);
  const dispatch = useDispatch();

  const [blog, setBlog] = useState("");
  // const [blogs, setBlogs] = useState([]);

  const data = useOutletContext();
  console.log("DATA OUTLET :: ", data);
  const submitBlog = () => {
    // dispatch(
    //   addBlog({
    //     idx: blogs?.length,
    //     blog,
    //   })
    // );

    dispatch(
      blogActions.addBlogToolkit({
        idx: blogs?.length,
        blog,
      })
    );
    // setBlogs([
    //   ...blogs,
    //   {
    //     idx: blogs?.length,
    //     blog,
    //   },
    // ]);
  };
  const onchangeBlog = (e) => {
    setBlog(e.target.value);
  };
  return (
    <>
      <div className="todo">
        <hr color="white" />
        <textarea
          name=""
          id=""
          placeholder="Enter blog here..."
          rows={4}
          cols={40}
          onChange={onchangeBlog}
        ></textarea>
        <button onClick={submitBlog}> Add Blog</button>

        <div className="display-blogs">
          <h2> {blogs?.length ? "Blogs --" : "No Blogs!!"} </h2>
          {blogs?.map((item, idx) => (
            <h2 key={idx}>{item?.blog}</h2>
          ))}
        </div>
      </div>
      <hr />

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
