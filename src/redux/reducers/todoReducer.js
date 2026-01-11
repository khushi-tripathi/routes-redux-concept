import { ADD_TODO, SET_TODO_STATUS } from "../actions/todoActions";

const initialState = {
  todos: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.todo,
            status: false,
          },
        ],
      };
    case SET_TODO_STATUS:
      //   let stateTodos = [...state.todos];
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action?.todo?.idx
            ? { ...todo, status: action?.todo?.status }
            : { ...todo }
        ),
      };

    default:
      return {
        ...state,
      };
  }
}
