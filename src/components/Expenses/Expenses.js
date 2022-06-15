import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const expenses = props.data;
  const [filteredYear, setFilteredYear] = useState('2022');

  function filteredYearHandler(filteredYearData) {
    setFilteredYear(filteredYearData);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onfilteredYear={filteredYearHandler}
      />
      {expenses.map((object, index) => (
        <ExpenseItem
          key={index}
          title={object.title}
          amount={object.amount}
          date={object.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
