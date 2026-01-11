import { ADD_BLOG } from "../actions/blogActions";

const initialState = {
  blogs: [],
};
export function blogReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.blog],
      };

    default:
      return state;
  }
}
