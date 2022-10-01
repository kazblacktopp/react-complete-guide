import classes from './Counter.module.css';

export default function Counter() {
  const { counter, value } = classes;

  function toggleCounterHandler() {}

  return (
    <main className={counter}>
      <h1>Redux Counter</h1>
      <div className={value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
