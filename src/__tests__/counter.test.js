import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import CalculatorContainer from '../containers/CalculatorContainer';

let container;

beforeEach(() => {
  container = document.createElement('div');
});

describe('Counter Component', () => {
  test('can render and update a counter', async () => {
    const { getByText, getByTestId } = render(
      <CalculatorContainer />,
      container,
    );

    fireEvent.click(getByText('더하기'), { button: 0 });
    expect(getByTestId('number-display').textContent).toBe('1');
  });
});
