import React from 'react';

function ToDoItems({ Item }) {
  return (
    <li>
      <span>{Item} </span>
      <input type='checkbox'></input>
    </li>
  );
}

export default ToDoItems;
