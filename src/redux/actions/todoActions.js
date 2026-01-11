// ACTIONS DECLARATIONS/CONSTANTS --
export const ADD_TODO = "ADD_TODO";
export const SET_TODO_STATUS = "SET_TODO_STATUS";

// ACTIONS CREATORS --

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};
export const setTodoStatus = (index) => {
  return {
    type: SET_TODO_STATUS,
    index,
  };
};
