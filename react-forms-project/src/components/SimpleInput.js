import { useRef } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const enteredNameRef = useRef();

  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: enteredNameHasError,
    inputChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(value => isNameValid(value));

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: enteredEmailHasError,
    wasValid: enteredEmailWasValid,
    lostFocus: emailFieldLostFocus,
    inputChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => isEmailValid(value));

  const inputNameClasses = enteredNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputHasError =
    (enteredEmailHasError && enteredEmailWasValid) ||
    (enteredEmailHasError && emailFieldLostFocus);

  const inputEmailClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  function isNameValid(name) {
    return name.trim() !== '';
  }

  function isEmailValid(email) {
    const emailFormatTestRegExp = new RegExp(/\S+@\S+\.\S+/);
    return emailFormatTestRegExp.test(email);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!nameInputIsValid || !emailInputIsValid) {
      return;
    }

    enteredNameRef.current.focus();

    resetNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
          ref={enteredNameRef}
        />
        {enteredNameHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={enteredEmailChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
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
