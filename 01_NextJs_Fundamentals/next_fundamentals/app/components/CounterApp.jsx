"use client";

import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    const MAX = 18;
    const MIN = 0;

    setCounter((prev) => {
      let newValue = prev + value;

      if (newValue > MAX) setCounter(MAX);
      if (newValue < MIN) setCounter(MIN);

      return newValue;
    });
  };

  return (
    <div>
      <h3>Count -: {counter}</h3>
      <button onClick={() => handleCounter(1)}>Add +1</button>
      <button onClick={() => handleCounter(-1)}>Sub -1</button>
      <button onClick={() => handleCounter(2)}>Add +2</button>
      <button onClick={() => handleCounter(-2)}>Sub -2</button>
    </div>
  );
};

export default CounterApp;
