/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import DrumKeys from './DrumKeys'
import { KEYS } from '../keys'

chai.should()

describe('<DrumKeys />', () => {
  it('renders without crashing', () => {
    shallow(<DrumKeys />)
  })

  it('should have a div with id #drum-keys', () => {
    let wrapper = shallow(<DrumKeys />)

    wrapper.find('#drum-keys').should.have.lengthOf(1)
  })

  it('should have represent all keys', () => {
    let wrapper = shallow(<DrumKeys />)
    let length = KEYS.length

    wrapper
      .find('#drum-keys')
      .children()
      .should.have.lengthOf(length)
  })
})
