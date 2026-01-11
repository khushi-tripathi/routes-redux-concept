// import redux from "redux";

import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { blogReducer } from "./reducers/blogReducer";
import { configureStore } from "@reduxjs/toolkit";

// const reducers = combineReducers({
//   todoReducer,
//   blogReducer,
// });

// export const store = createStore(reducers);

export const store = configureStore({
  reducer: {
    todoReducer,
    blogReducer,
  },
});
