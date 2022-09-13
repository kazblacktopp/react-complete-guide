import { useState, useEffect } from 'react';

export function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const [valueWasValid, setValueWasValid] = useState(false);
  const [valueLostFocus, setValueLostFocus] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueInputHasError = !valueIsValid && valueIsTouched;

  useEffect(() => {
    if (valueIsValid) {
      setValueWasValid(true);
    }
  }, [valueIsValid]);

  function inputChangeHandler(event) {
    setEnteredValue(event.target.value);
    setValueIsTouched(true);
  }

  function inputBlurHandler() {
    setValueIsTouched(true);
    setValueLostFocus(true);
  }

  function reset() {
    setEnteredValue('');
    setValueIsTouched(false);
    setValueWasValid(false);
    setValueLostFocus(false);
  }

  return {
    value: enteredValue,
    isTouched: valueIsTouched,
    isValid: valueIsValid,
    wasValid: valueWasValid,
    lostFocus: valueLostFocus,
    hasError: valueInputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}
