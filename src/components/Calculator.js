import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({
  number,
  onClickIncrement,
  onClickDecrement,
}) => {
  return (
    <div>
      <h1 data-testid="number-display">{number}</h1>
      <div>
        <button type="button" onClick={onClickIncrement}>
          더하기
        </button>
        <button type="button" onClick={onClickDecrement}>
          빼기
        </button>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  number: PropTypes.number.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
};

export default Calculator;
