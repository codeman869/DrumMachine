/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import { Display } from './Display'

chai.should()

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />)
  })

  it('renders a div with id #drum-machine', () => {
    const wrapper = shallow(<Display />)
    wrapper.find('#display').should.have.lengthOf(1)
  })
})
