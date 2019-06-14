/* global describe, it */
import chai from 'chai'
import playKey from './'

chai.should()

describe('Action tests', () => {
  it('returns the expected action type', () => {
    let results = playKey('test-key')
    let expected = {
      type: 'PLAY_KEY',
      payload: 'test-key',
    }

    results.should.deep.equal(expected)
  })
})
