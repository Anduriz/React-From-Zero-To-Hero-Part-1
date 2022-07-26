import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

    // Exponer metodos del hook
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if(counter === 0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }

  return {
    // JS
    // counter: counter,
    // ES6
    counter,
    increment,
    decrement,
    reset,
  };
};