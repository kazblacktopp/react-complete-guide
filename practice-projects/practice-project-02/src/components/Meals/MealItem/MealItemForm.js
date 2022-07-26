import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  function formSubmitHandler(event) {
    event.preventDefault();

    const inputAmount = inputRef.current.value;
    const inputAmountNumber = +inputAmount;

    if (
      inputAmount.trim() === '' ||
      inputAmountNumber < 1 ||
      inputAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onSubmitItem(inputAmountNumber);
  }

  return (
    <form id={props.id} className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button form={props.id} type="submit">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid number between 1 and 5.</p>}
    </form>
  );
}

export default MealItemForm;
