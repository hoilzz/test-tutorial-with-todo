# Test Turorial

redux 공홈의 [writing test](https://redux.js.org/recipes/writing-tests)를 보며 test에 대해 익혀보자.

Redux code의 대부분이 함수이기 때문에, 많은 함수들은 pure하다. 그래서 mocking 없이 test 하기 쉽다.

### Setting up

## Action Creeators

리덕스에서 action creators는 plain object를 리턴하는 함수다. 

action creator를 테스트할 때, 
- 올바른 action creator가 호출되고
- 올바른 action이 리턴되는지 테스트한다.

## Async Action Creators

```js
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/TodoActions'
import * as types from '../../constants/ActionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    // 한번 호출하기?
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ]

    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
```