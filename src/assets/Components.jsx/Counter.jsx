import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);

  function incrementCount() {
    setCount(count + 11);
  }

  function decrementCount() {
    setCount(count - 10);
  }

  return (
    <div>
      <h1>This is counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;