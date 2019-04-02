import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Calculator from './index';

function setup(number = 0) {
  const callbacks = {
    onClickIncrement: jest.fn(),
    onClickDecrement: jest.fn(),
    onClickAsyncIncrement: jest.fn(),
  };

  const utils = render(<Calculator number={number} {...callbacks} />);

  return {
    utils,
    ...callbacks,
  };
}

// 얘 없이 테스트 돌리면, 2번째 테스트부터 테스트 fail
// react-testing-library의 render 함수는 document.body에 append 되는 방식
// 두번째 테스트의 setup에서 getByText는 첫번째 테스트의 button을 찾을 거고
// 두번쨰 setup의 mock함수가 아닌 첫번째 setup의 mock함수가 호출됐으므로 test fail..
afterEach(cleanup);

describe('Calculator component', () => {
  test('asyncIncrement button should call onClickAsyncIncrement', () => {
    const { utils, onClickAsyncIncrement } = setup();
    const button = utils.getByText('속도가 느린 더하기');

    fireEvent.click(button, { button: 0 });

    expect(onClickAsyncIncrement).toBeCalled();
  });

  test('first button should call onClickIncrement', () => {
    // arrange
    const { utils, onClickIncrement } = setup();

    const incrementBtn = utils.getByText('더하기');

    // act
    // incrementBtn 클릭시
    fireEvent.click(incrementBtn, { button: 0 });

    // expect
    // mock fn called once
    expect(onClickIncrement).toHaveBeenCalledTimes(1);
  });
});
