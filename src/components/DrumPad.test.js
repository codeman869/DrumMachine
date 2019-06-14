/* global describe, it, beforeEach */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import { DrumPad } from './DrumPad'

chai.should()

describe('<DrumPad />', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      text: 'jazzy-j',
    }
    wrapper = shallow(<DrumPad {...props} />)
  })
  it('renders without crashing', () => {
    shallow(<DrumPad />)
  })

  it('contains an audio element', () => {
    wrapper.find('audio').should.have.lengthOf(1)
  })

  it('has a className of #drum-pad', () => {
    wrapper.find('.drum-pad').should.have.lengthOf(1)
  })

  it('has a unique id from props', () => {
    wrapper.find(`#${props.text}`).should.have.lengthOf(1)
  })

  it('has events for click interaction', () => {
    const props = wrapper
      .find('div')
      .first()
      .props()

    props.onClick.should.be.a('function')
    props.onMouseDown.should.be.a('function')
    props.onMouseUp.should.be.a('function')
  })
})
