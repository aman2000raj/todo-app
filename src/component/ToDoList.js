import React from 'react';
import ToDoItems from './ToDoItems';

function ToDoList() {
  const Items = [
    'Read SpringBoot',
    'Complete assignment',
    'Prepare breakfast',
    'sleep for 2 hours',
    'Take a shower',
  ];

  return (
    <ul>
      {Items.map((Item, idx) => (
        <ToDoItems key={idx} Item={Item} />
      ))}
    </ul>
  );
}

export default ToDoList;
