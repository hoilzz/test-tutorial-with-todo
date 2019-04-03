import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, onClickIncrement, onClickDecrement }) => (
  <div>
    <h1 data-testid="count-value">{number}</h1>
    <button type="button" onClick={onClickIncrement}>
      +
    </button>
    <button type="button" onClick={onClickDecrement}>
      -
    </button>
  </div>
);

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
};

export default Counter;
