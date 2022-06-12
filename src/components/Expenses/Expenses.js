import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
  const expenses = props.data;
  return (
    <Card className="expenses">
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
