import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('all');
  const filteredExpenses =
    filteredYear === 'all'
      ? props.items
      : props.items.filter(
          item => item.date.getFullYear().toString() === filteredYear
        );

  function filteredYearHandler(filteredYearData) {
    setFilteredYear(filteredYearData);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onfilteredYear={filteredYearHandler}
      />
      <ExpensesChart expensesData={filteredExpenses} />
      <ExpensesList items={filteredExpenses} year={filteredYear} />
    </Card>
  );
}

export default Expenses;
