import { useState, useEffect } from 'react';

export default function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const [valueWasValid, setValueWasValid] = useState(false);
  const [inputFieldLostFocus, setInputFieldLostFocus] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueHasError = isTouched && !valueIsValid;

  useEffect(() => {
    if (valueIsValid) {
      setValueWasValid(true);
    }
  }, [valueIsValid]);

  function inputChangeHandler(event) {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  }

  function inputBlurHandler() {
    setIsTouched(true);
    setInputFieldLostFocus(true);
  }

  function reset() {
    setEnteredValue('');
    setIsTouched(false);
    setValueWasValid(false);
    setInputFieldLostFocus(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: valueHasError,
    wasValid: valueWasValid,
    lostFocus: inputFieldLostFocus,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}
