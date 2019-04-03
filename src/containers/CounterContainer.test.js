import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-testing-library';

import CounterContainer from './CounterContainer';
import store from '../store';

describe('CounterContainer', () => {
  test('can render with redux with defaults', () => {
    const utils = render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>,
    );
    // arrange
    // createStore로 store 생성
    // Provider로 store 초기화

    // act
    fireEvent.click(utils.getByText('+'));

    // expect
    expect(utils.getByTestId('count-value').textContent).toBe('1');
  });

  test('can render with redux with custom initial State', () => {});

  test('can render with redux with custom store', () => {});
});
