import React, { useState } from 'react';

import Calculator from '../components/Calculator';

const CalculatorContainer = () => {
  const [number, updateCounter] = useState(0);

  const handleIncrement = () => updateCounter(number + 1);
  const handleDecrement = () => updateCounter(number - 1);

  return (
    <Calculator
      number={number}
      onClickIncrement={handleIncrement}
      onClickDeCrement={handleDecrement}
    />
  );
};

export default CalculatorContainer;
