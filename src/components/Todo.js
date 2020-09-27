import React from "react";

const Todo = ({ setTodos, todo, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            // Returning an object here.
            ...item, // return rest of the properties as they are right now.
            completed: !item.completed, // Just changing the completed property of the object.
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
