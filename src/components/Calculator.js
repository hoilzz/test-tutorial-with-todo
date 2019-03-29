import React, { useState } from 'react';

const Calculator = () => {
  const [counter, updateCounter] = useState(0);

  const onIncrement = () => updateCounter(counter + 1);
  const onDecrement = () => updateCounter(counter - 1);

  return (
    <div>
      <div>Counter : {counter}</div>
      <div>
        <button type="button" onClick={onIncrement}>
          더하기
        </button>
        <button type="button" onClick={onDecrement}>
          빼기
        </button>
      </div>
    </div>
  );
};

export default Calculator;
