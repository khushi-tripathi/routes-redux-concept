// import redux from "redux";

import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { blogReducer } from "./reducers/blogReducer";

const reducers = combineReducers({
  todoReducer,
  blogReducer,
});

export const store = createStore(reducers);
