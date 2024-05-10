import React, { useState } from 'react';
import ToDoItems from './ToDoItems';

function ToDoList() {
  const initialItems = [
    'Read SpringBoot',
    'Complete assignment',
    'Prepare breakfast',
    'sleep for 2 hours',
    'Take a shower',
  ];

  const [items, setItems] = useState(initialItems);

  const handleEmptyItem = () => {
    setItems([]);
  };

  return (
    <>
      <ul>
        {items.length === 0 && <li>Nothing to do buddy. Sleep!</li>}
        {items.map((item, idx) => (
          <ToDoItems key={idx} Item={item} />
        ))}
      </ul>
      <button
        type='button'
        onClick={handleEmptyItem}
        disabled={items.length === 0}
      >
        Empty
      </button>
    </>
  );
}

export default ToDoList;
