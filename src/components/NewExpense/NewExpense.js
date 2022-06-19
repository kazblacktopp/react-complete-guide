import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  function saveNewExpenseHandler(newExpenseData) {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingNewExpense(false);
  }

  function addNewExpenseHandler() {
    setIsAddingNewExpense(true);
  }

  function cancelNewExpense() {
    setIsAddingNewExpense(false);
  }

  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onCancel={cancelNewExpense}
        />
      )}
    </div>
  );
}

export default NewExpense;
