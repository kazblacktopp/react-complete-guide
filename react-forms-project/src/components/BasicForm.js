import { useRef } from 'react';
import { useInput } from '../hooks/use-input';

const BasicForm = () => {
  const firstNameRef = useRef();

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(enteredNameIsValid);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(enteredNameIsValid);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    wasValid: emailWasValid,
    lostFocus: emailLostFocus,
    hasError: emailInputIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(enteredEmailIsValid);

  const emailInputHasError =
    (emailInputIsInvalid && emailWasValid) ||
    (emailInputIsInvalid && emailLostFocus);

  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  function enteredNameIsValid(name) {
    return name.trim() !== '';
  }

  function enteredEmailIsValid(email) {
    const emailValidationRegExp = new RegExp(/\S+@\S+\.\S+/);
    return emailValidationRegExp.test(email);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameRef.current.focus();

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            ref={firstNameRef}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">
            Please enter a valid email address. E.g. name@domain.com
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
