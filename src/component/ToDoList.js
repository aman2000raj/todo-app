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

  const initialItemsData = initialItems.map((item) => ({
    value: item,
    isCompleted: false,
  }));

  const [items, setItems] = useState(initialItemsData);

  const completeTask = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };

  const clearCompleteTask = () => {
    const newiIncompleteItems = items.filter((item) => !item.isCompleted);
    setItems(newiIncompleteItems);
  };

  const handleEmptyItem = () => {
    setItems([]);
  };

  const isAnyItemCompleted = items.some((item) => item.isCompleted);

  return (
    <>
      <ul>
        {items.length === 0 && <li>Nothing to do buddy. Sleep!</li>}
        {items.map((item, idx) => (
          <ToDoItems
            key={idx}
            Item={item}
            completeItem={() => completeTask(idx)}
          />
        ))}
      </ul>
      <button
        type='button'
        onClick={isAnyItemCompleted ? clearCompleteTask : handleEmptyItem}
        disabled={items.length === 0}
      >
        Empty
      </button>
    </>
  );
}

export default ToDoList;
