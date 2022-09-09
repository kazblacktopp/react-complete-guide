import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(-1, 1000);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
