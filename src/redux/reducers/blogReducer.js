import { createSlice } from "@reduxjs/toolkit";
// import { ADD_BLOG } from "../actions/blogActions";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogToolkit: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});

export const blogReducer = blogSlice.reducer;
export const blogActions = blogSlice.actions;
export const blogSelector = (state) => state?.blogReducer?.blogs;

// export function blogReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_BLOG:
//       return {
//         ...state,
//         blogs: [...state.blogs, action.blog],
//       };

//     default:
//       return state;
//   }
// }
