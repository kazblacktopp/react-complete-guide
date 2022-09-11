import { useRef } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const enteredNameRef = useRef();

  const emailFormatTestRegExp = new RegExp(/\S+@\S+\.\S+/);

  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: enteredNameIsInvalid,
    inputChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput(name => isNameValid(name));

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: enteredEmailIsInvalid,
    wasValid: enteredEmailWasValid,
    lostFocus: emailFieldLostFocus,
    inputChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput(email => isEmailValid(email));

  const inputNameClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailFieldHasError =
    (enteredEmailIsInvalid && enteredEmailWasValid) ||
    (enteredEmailIsInvalid && emailFieldLostFocus);

  const inputEmailClasses = emailFieldHasError
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
    return emailFormatTestRegExp.test(email);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!nameInputIsValid || !emailInputIsValid) {
      return;
    }

    enteredNameRef.current.focus();

    nameInputReset();
    emailInputReset();
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
        {enteredNameIsInvalid && (
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
