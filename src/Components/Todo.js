import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodoStatus } from "../redux/actions/todoActions";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("data selectors : ", todos);
  //   const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const onChangeTodo = (e) => {
    setTodo({
      idx: todos?.length,
      content: e.target.value,
      status: false,
    });
  };

  const add = () => {
    dispatch(addTodo(todo));
    // setTodos([...todos, { ...todo }]);
    setTodo({});
  };

  const handleStatus = (value, idx) => {
    return () => {
      let currentTodoList = [...todos];
      currentTodoList[idx] = {
        ...currentTodoList[idx],
        status: value,
      };
      dispatch(setTodoStatus({ idx, status: value }));
      //   setTodos(currentTodoList);
    };
  };

  return (
    <div className="todo">
      <div>Todo List -- </div>
      <textarea
        className="textarea"
        rows={4}
        cols={40}
        placeholder="Enter your todo..."
        type="text"
        onChange={onChangeTodo}
        value={todo?.content || ""}
      />
      <button onClick={add}> Add TODO </button>
      <div className="display-todo">
        {todos?.length ? <h2> Available TODOS</h2> : null}
        <hr />
        {todos.map((item, idx) => {
          return (
            <div key={idx}>
              <h3>{item?.content}</h3>
              <button onClick={handleStatus(true, idx)}>Completed!!</button>
              <button onClick={handleStatus(false, idx)}>Not Completed!</button>
              {item?.status ? (
                <h4>Current Status is completed.</h4>
              ) : (
                <h4>Not Completed Yet!!</h4>
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
