import React, { useState } from 'react';

import Calculator from '../components/calculator';

const CalculatorContainer = () => {
  const [number, updateCounter] = useState(0);

  const handleIncrement = () => updateCounter(number + 1);
  const handleDecrement = () => updateCounter(number - 1);
  const handleAsyncIncrement = () =>
    setTimeout(() => {
      updateCounter(number + 1);
    }, 500);

  return (
    <Calculator
      number={number}
      onClickIncrement={handleIncrement}
      onClickDecrement={handleDecrement}
      onClickAsyncIncrement={handleAsyncIncrement}
    />
  );
};

export default CalculatorContainer;
