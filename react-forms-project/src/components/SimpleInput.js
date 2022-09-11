import { useState, useRef } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const enteredNameRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);

  function enteredNameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log(enteredName);

    const submittedName = enteredNameRef.current.value;
    console.log(submittedName);

    // enteredNameRef.current.value = ''; // Not best practice (directly manipulates the DOM)
    // Or:
    // event.target.reset();
    // Or:
    setEnteredName('');
  }

  const nameFieldClasses = nameIsValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          ref={enteredNameRef}
          value={enteredName}
        />
      </div>
      {!nameIsValid && <p className="error-text">Name must not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
