function ClearButton({ items, setItems }) {
  const clearCompleteTask = () => {
    const newiIncompleteItems = items.filter((item) => !item.isCompleted);
    setItems(newiIncompleteItems);
  };

  const clearTodoItem = () => {
    setItems([]);
  };
  const isAnyItemCompleted = items.some((item) => item.isCompleted);

  const handleOnClick = isAnyItemCompleted ? clearCompleteTask : clearTodoItem;
  const buttonText = isAnyItemCompleted ? 'Remove Completed' : 'Empty';
  const isDisabled = items.length === 0;
  return (
    <button type='button' onClick={handleOnClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
}

export default ClearButton;
