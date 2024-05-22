import { useState } from 'react';

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleOnChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleOnClick() {
    onAddTask(enteredTask);
    setEnteredTask('');
  }
  return (
    <div className="flex items-center">
      <input
        onChange={handleOnChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleOnClick}
        className="text-stone-700 hover:text-stone-950 mx-2"
      >
        Add Task
      </button>
    </div>
  );
}
