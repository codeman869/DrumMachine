/* global describe, it, beforeEach */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import { Display } from './Display'

chai.should()

describe('<Display />', () => {
  let wrapper, props

  beforeEach(() => {
    props = {
      keyPlayed: 'Jazzy-J',
    }
    wrapper = shallow(<Display {...props} />)
  })

  it('renders without crashing', () => {
    shallow(<Display />)
  })

  it('renders a div with id #drum-machine', () => {
    wrapper.find('#display').should.have.lengthOf(1)
  })

  it('displays the keyPlayed prop from state', () => {
    wrapper.text().should.equal(props.keyPlayed)
  })
})
