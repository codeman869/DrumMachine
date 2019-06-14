/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import DrumMachine from './DrumMachine'

chai.should()

describe('<DrumMachine />', () => {
  it('renders without crashing', () => {
    shallow(<DrumMachine />)
  })

  it('renders a div with id #drum-machine', () => {
    const wrapper = shallow(<DrumMachine />)
    wrapper.find('#drum-machine').should.have.lengthOf(1)
  })
})
