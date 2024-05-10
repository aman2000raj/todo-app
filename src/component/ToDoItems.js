import React from 'react';

function ToDoItems({ Item, completeItem }) {
  return (
    <li onClick={completeItem}>
      <span
        style={{ textDecoration: Item.isCompleted ? 'line-through' : 'none' }}
      >
        {Item.value}
      </span>
      <input type='checkbox'></input>
    </li>
  );
}

export default ToDoItems;
