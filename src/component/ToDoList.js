import React, { useState } from 'react';
import ToDoItems from './ToDoItems';
import ClearButton from './ClearButton';

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
      <ClearButton items={items} setItems={setItems} />
    </>
  );
}

export default ToDoList;
