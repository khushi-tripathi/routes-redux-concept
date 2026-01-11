import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const onChangeTodo = (e) => {
    setTodo({
      idx: todos?.length,
      content: e.target.value,
      status: false,
    });
  };

  const addTodo = () => {
    setTodos([...todos, { ...todo }]);
    setTodo({});
  };

  const handleStatus = (value, idx) => {
    return () => {
      let currentTodoList = [...todos];
      currentTodoList[idx] = {
        ...currentTodoList[idx],
        status: value,
      };
      debugger;
      setTodos(currentTodoList);
    };
  };

  return (
    <div className="todo">
      <div>Todo List -- </div>
      {/* <div className="input-section"> */}
      <textarea
        className="textarea"
        rows={4}
        cols={40}
        placeholder="Enter your todo..."
        type="text"
        onChange={onChangeTodo}
        value={todo?.content || ""}
      />
      <button onClick={addTodo}> Add TODO </button>
      {/* </div> */}

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
