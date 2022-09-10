import { useRef } from 'react';

import classes from './TaskForm.module.css';

export default function TaskForm({ loading, onEnterTask }) {
  const taskInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;
    event.target.reset();

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
}
