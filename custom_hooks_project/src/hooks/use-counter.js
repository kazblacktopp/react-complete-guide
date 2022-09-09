import { useState, useEffect } from 'react';

export default function useCounter(increment, delay) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + increment);
    }, delay);

    return () => clearInterval(interval);
  }, [increment, delay]);

  return counter;
}
