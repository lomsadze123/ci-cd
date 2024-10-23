import { useStore } from "../stores";

const CounterButton = () => {
  const { decrement, increment } = useStore();
  return (
    <>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CounterButton;
