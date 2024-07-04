import React, { useState } from "react";
import "./todo.css";

function ToDoApp() {
  /*
    - state for to do list item
    - list of to do items
  */

  const todoList: string[] = [];

  const [list, setList] = useState(todoList);
  const [item, setItem] = useState("");

  const handleItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
    setList([...list, item]);
    setItem("");
    console.log("cleared");
  };

  return (
    <>
      <input type="text" onChange={handleItem} />
      <br />
      <button onClick={handleAddItem}>Add Item</button>
      {item}
      <h2>To do list items:</h2>
      {list &&
        list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </>
  );
}

export default ToDoApp;
