import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux-store';

import classes from './Counter.module.css';

export default function Counter() {
  const counter = useSelector(state => state?.counter);
  const showCounter = useSelector(state => state?.showCounter);
  const dispatch = useDispatch();

  const { counter: counterClass, value: valueClass } = classes;

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(10));
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={counterClass}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={valueClass}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
