import { useCountStore } from '../stores/count-store';

export default function Count() {
  const { count, increment, decrement } = useCountStore();

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div>{count}</div>
    </div>
  );
}
