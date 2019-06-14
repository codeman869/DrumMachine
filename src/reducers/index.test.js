/* global describe, it */
import chai from 'chai'
import keyReducer, { initialState } from './'

chai.should()

describe('Reducer tests', () => {
  it('updates state', () => {
    const action = {
      type: 'PLAY_KEY',
      payload: 'Jazzy-J',
    }

    const expectedState = {
      keyPlayed: 'Jazzy-J',
    }

    const actualState = keyReducer(null, action)

    actualState.should.deep.equal(expectedState)
  })
  it("doesn't update state for invalid actions", () => {
    const action = { type: 'PLAYED_KEY', payload: 'HI' }
    const actualState = keyReducer(initialState, action)

    actualState.should.equal(initialState)
  })
})
