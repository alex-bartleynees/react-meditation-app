import users from './usersReducer'
import loadingReducer from './loading'

describe('reducer tests', () => {
  test('get all users', () => {
    const stateBefore = []

    const action = {
      type: 'RECEIVE_USERS',
    }

    const stateAfter = [
      {id: 8001, name: "Alex", total_time: "0"},
      {id: 8002, name: "Billy", total_time: "0"},
      {id: 8003, name: "Alison", total_time: "0"},
      {id: 8006, name: "Jack", total_time: null},
      {id: 8008, name: "John", total_time: null}
    ]

    Object.freeze(stateBefore)
    Object.freeze(stateAfter)

    expect(users(stateBefore, action)).toEqual(stateAfter)

  })
})