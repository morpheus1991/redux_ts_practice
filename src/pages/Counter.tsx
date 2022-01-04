import React, { useState } from "react";
import { store } from "..";
import { decrease, increase } from "../store/actions/counter";

const Counter = () => {
  const [number, setNumber] = useState(store.getState().number);

  const increment = () => {
    store.dispatch(increase());
    setNumber(store.getState().number);
  };
  const decrement = () => {
    store.dispatch(decrease());
    setNumber(store.getState().number);
  };

  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
