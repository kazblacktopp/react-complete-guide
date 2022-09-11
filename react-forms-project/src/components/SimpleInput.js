import { useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

  const nameInputIsValid = enteredName.trim() !== '' && nameInputIsTouched;
  const enteredNameIsInvalid = nameInputIsTouched && !nameInputIsValid;

  let formIsValid = false;

  if (nameInputIsValid) {
    formIsValid = true;
  }

  function enteredNameChangeHandler(event) {
    setEnteredName(event.target.value);
    setNameInputIsTouched(true);
  }

  function nameInputBlurHandler(event) {
    setNameInputIsTouched(true);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    setNameInputIsTouched(true);

    if (!nameInputIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setNameInputIsTouched(false);
  }

  const nameFieldClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {enteredNameIsInvalid && (
        <p className="error-text">Name must not be empty!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
