import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  function saveNewExpenseHandler(newExpenseData) {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;
