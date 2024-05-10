import React from 'react';

function ToDoItems({ Item, completeItem }) {
  const { value, isCompleted } = Item;
  return (
    <li onClick={completeItem}>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {value}
      </span>
    </li>
  );
}

export default ToDoItems;
