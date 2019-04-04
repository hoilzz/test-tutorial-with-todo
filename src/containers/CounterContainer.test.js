import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { createStore, combineReducers } from 'redux';
import CounterContainer from './CounterContainer';
// import store from '../store';
import counterReducer from '../modules/counter';

const setup = (component, { reducer, initialState }) => {
  console.log('reducer: ', reducer);
  const utils = render(
    <Provider
      store={createStore(
        combineReducers({ ...reducer }),
        initialState,
      )}
    >
      {component}
    </Provider>,
  );
  return {
    ...utils,
  };
};

afterEach(cleanup);

describe('CounterContainer', () => {
  test('can render with redux with defaults', () => {
    const utils = setup(<CounterContainer />, {
      initialState: {
        counter: { number: 0 },
      },
      reducer: { counter: counterReducer },
    });
    // arrange

    // act
    fireEvent.click(utils.getByText('+'));

    // expect
    expect(utils.getByTestId('count-value').textContent).toBe('1');
  });

  test('can render with redux with custom initial State', () => {
    // arrange
    const utils = setup(<CounterContainer />, {
      initialState: { counter: { number: 0 } },
      reducer: { counter: counterReducer },
    });
    // act
    // expect
    expect(utils.getByTestId('count-value').textContent).toBe('0');
  });

  test('can render with redux with custom store', () => {});
});
