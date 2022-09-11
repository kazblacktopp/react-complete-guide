import { useState, useRef, useEffect } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);
  const [enteredEmailWasValid, setEnteredEmailWasValid] = useState(false);
  const [emailFieldLostFocus, setEmailFieldLostFocus] = useState(false);

  const enteredNameRef = useRef();
  const enteredEmailRef = useRef();

  const nameInputIsValid = enteredName.trim() !== '';
  const enteredNameIsInvalid = nameInputIsTouched && !nameInputIsValid;

  const emailFormatTestRegExp = new RegExp(/\S+@\S+\.\S+/);
  const emailInputIsValid = isEmailValid(enteredEmail);
  const enteredEmailIsInvalid = emailInputIsTouched && !emailInputIsValid;

  function isEmailValid(email) {
    return emailFormatTestRegExp.test(email);
  }

  useEffect(() => {
    if (emailInputIsValid) {
      setEnteredEmailWasValid(true);
    }
  }, [emailInputIsValid]);

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  function enteredInputChangeHandler(event) {
    if (event.target === enteredNameRef.current) {
      setEnteredName(event.target.value);
      setNameInputIsTouched(true);
    }

    if (event.target === enteredEmailRef.current) {
      setEnteredEmail(event.target.value);
      setEmailInputIsTouched(true);
    }
    return;
  }

  function nameInputBlurHandler() {
    setNameInputIsTouched(true);
  }

  function emailInputBlurHandler() {
    setEmailInputIsTouched(true);
    setEmailFieldLostFocus(true);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!nameInputIsValid || !emailInputIsValid) {
      return;
    }

    enteredNameRef.current.focus();
    setEnteredName('');
    setNameInputIsTouched(false);

    setEnteredEmail('');
    setEmailInputIsTouched(false);
    setEnteredEmailWasValid(false);
    setEmailFieldLostFocus(false);
  }

  const inputNameClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailFieldHasError =
    (enteredEmailIsInvalid && enteredEmailWasValid) ||
    (enteredEmailIsInvalid && emailFieldLostFocus);

  const inputEmailClasses = emailFieldHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
          ref={enteredNameRef}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={enteredInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          ref={enteredEmailRef}
        />
        {emailFieldHasError && (
          <p className="error-text">
            Email input must be a valid email address. E.g. name@email.com
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
