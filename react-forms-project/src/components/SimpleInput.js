import { useState } from 'react';
// import {useRef} from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  // const enteredNameRef = useRef();
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

  function enteredNameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function nameInputBlurHandler(event) {
    setNameInputIsTouched(true);

    if (enteredName.trim() === '') {
      setNameInputIsValid(false);
      return;
    }
  }

  function submitFormHandler(event) {
    event.preventDefault();

    setNameInputIsTouched(true);

    if (enteredName.trim() === '') {
      setNameInputIsValid(false);
      return;
    }

    setNameInputIsValid(true);

    console.log(enteredName);

    // const submittedName = enteredNameRef.current.value;
    // console.log(submittedName);

    // enteredNameRef.current.value = ''; // Not best practice (directly manipulates the DOM)
    // Or:
    // event.target.reset();
    // Or:
    setEnteredName('');
  }

  const formIsInvalid = nameInputIsTouched && !nameInputIsValid;

  const nameFieldClasses = formIsInvalid
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
          // ref={enteredNameRef}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {formIsInvalid && <p className="error-text">Name must not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
