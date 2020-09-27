import React from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  errorMessage,
  setErrorMessage,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setErrorMessage("Please enter a valid Todo");
      return;
    }

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() + 1000 },
    ]);

    setInputText("");
  };

  const setStatusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          className="todo-button"
          onClick={submitTodoHandler}
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={setStatusHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      {!!errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Form;
