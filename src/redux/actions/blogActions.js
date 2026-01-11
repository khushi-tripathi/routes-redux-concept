// ACTIONS DECLARATIONS/CONSTANTS --
export const ADD_BLOG = "ADD_BLOG";

// ACTIONS CREATORS --

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    blog,
  };
};
