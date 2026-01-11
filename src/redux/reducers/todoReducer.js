// import { ADD_TODO, SET_TODO_STATUS } from "../actions/todoActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// CREATING REDUCER USING REDUX TOOLKIT WAY --
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // in reducers we define actions --
    // In toolkit - we didn't created actions, action creators, not returning state all the time (means everyswitch case we used to pass ...state value) ,
    addTodoToolkit: (state, action) => {
      state.todos.push({
        ...action.payload,
        status: false,
      });
    },
    setStatusTodoToolkit: (state, action) => {
      //   state.todos.map((todo, index) => {
      //     if (index === action?.payload?.idx) {
      //       todo = { ...todo, status: action?.payload?.status };
      //     }
      //     return todo;
      //   });

      state.todos[action.payload.idx] = {
        ...state.todos[action.payload.idx],
        status: action?.payload?.status,
      };
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state?.todoReducer?.todos;

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             ...action.todo,
//             status: false,
//           },
//         ],
//       };
//     case SET_TODO_STATUS:
//       //   let stateTodos = [...state.todos];
//       return {
//         ...state,
//         todos: state.todos.map((todo, index) =>
//           index === action?.todo?.idx
//             ? { ...todo, status: action?.todo?.status }
//             : { ...todo }
//         ),
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// }
