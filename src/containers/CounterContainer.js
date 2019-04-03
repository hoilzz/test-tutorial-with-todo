import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from '../components/counter';
import * as counterActions from '../modules/counter';

const CounterContainer = ({
  displayNumber,
  increment,
  decrement,
}) => (
  <Counter
    number={displayNumber}
    onClickIncrement={increment}
    onClickDecrement={decrement}
  />
);

CounterContainer.propTypes = {
  displayNumber: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  displayNumber: state.counter.number,
});

export default connect(
  mapStateToProps,
  {
    ...counterActions,
  },
)(CounterContainer);
