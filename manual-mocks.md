# Manual Mocks

Manual Mock은 mock 데이터로 기능을 stub out(?) 하는데 사용된다. 예를 들어, website or db 원격 자원에 접근하는 것 대신에 fake data를 사용하는 manual mock을 생성할 수 있다. 이게 더 빠르고 flaky 하지 않다.

## Mocking user modules

manual mock은 `__mocks__/` 서브 디렉토리 내부에서 모듈을 작성하여 정의된다. 예를 들어 `modles` directory에서 `user`를 호출하는 모듈을 모킹하기 위해, `user.js`라는 파일을 생성하고 `models/__mocks__` 디렉토리에 넣자. `__mocks__`folder는 case-sensitive해서 `__MOCKS__`는 시스템을 망가뜨릴 수 있다.

> 우리 테스트에서 그 모듈을 필요로 할 때, 명시적으로 `jest.mock('./moduleName')`을 명시하여 호출하는 것이 필요 하다.

## Mocking Node modules

만약 너가 모킹하는 모듈이 Node module(e.g: lodash)이라면, **mock은 `node_modules`와 인접한 `**mocks**` 디렉토리에 위치해야 하고 이것은 자동으로 mocking된다.** 명시적으로 `jest.mock('module_name')`을 호출할 필요는 없다.

> **mocks**에서 mock의 파일명은 auto mocking을 위해 module 이름과 동일하게 한다.

예제를 보자.

```js
// api/index.js
import axios from 'axios';

async function getPosts(subReddit) {
  const posts = await axios.get(
    `https://www.reddit.com/r/${subReddit}.json`,
  );
  return posts;
}

export default {
  getPosts,
};
```

reddit api의 특정 주제에 대한 post를 가져오는 API다. 이 API에서 axios를 통해 GET 요청을 한다. 이 요청이 mocking 할 대상이다.

일단 해당 API를 테스트하기 위해 test 파일을 만들자.

```js
// __tests__/api.test.js
import api from '../api';

test('fetch posts from reddit', async () => {
  const data = await api.getPosts('reactjs', 'test');
  expect(data).toEqual();
});
```

api 테스트를 위해 가장 중요한 것은 Axios GET 요청의 mocking 구현이다. `__mocks__/axios.js`를 생성하자.

```js
// __mocks__/axios.js
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
```

이것은 get으로 호출되는 내부 함수와 함께 axios라는 모듈로 읽는다.
이 함수는 특정 데이터와의 promise를 resolve하는 Jest mock 함수를 가리킨다.

일단 real response와 닮은 더미 데이터를 넣어보자.

```js
// __tests__/api.test.js
import mockAxios from 'axios';
import api from '../api';

test('fetch posts from reddit', async () => {
  mockAxios.get.mockImplementationOnce(() => {
    return Promise.resolve({
      data: { posts: [] }, // dummay data
    });
  });

  // const { getPosts } = api;

  const data = await api.getPosts();
  expect(data).toEqual({ data: {} });

  expect(mockAxios.get).toHaveBeenCalledWith('reactjsa', 'test');
  // expect(api.getPosts).toHaveBeenCalledWith('reactjs', 'test');
});
```
