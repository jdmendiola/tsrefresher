import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

function Todo() {
  const initArr: Todo[] = [];
  const [todos, setNewTodo] = useState(initArr);
  const [todoItem, setTodoItem] = useState("");

  const handleButton = () => {
    setNewTodo([...todos, { text: todoItem, completed: false }]);
    setTodoItem("");
  };

  const handleDone = (i: number) => {
    const completedList = todos.map((todo, index) => {
      if (index === i) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setNewTodo(completedList);
  };

  return (
    <>
      <input
        type="input"
        placeholder="Enter a to do item then press the add button"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={handleButton}>Add Todo</button>

      {todos &&
        todos.map((element, index) => {
          return (
            <li
              onClick={() => {
                handleDone(index);
              }}
              key={index}
            >
              {element.text}
              {element.completed && " and it is completed"}
            </li>
          );
        })}
    </>
  );
}

export default Todo;
