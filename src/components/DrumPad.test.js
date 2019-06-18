/* global describe, it, beforeEach */
import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import chai from 'chai'
import { DrumPad } from './DrumPad'

chai.should()

window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
}

describe('<DrumPad />', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      text: 'jazzy-j',
      id: 'A',
      playKey: sinon.spy(),
      charCode: 40,
    }
    wrapper = shallow(<DrumPad {...props} />)
  })
  it('renders without crashing', () => {
    shallow(<DrumPad />)
  })

  it('contains an audio element', () => {
    wrapper.exists('audio').should.be.true
  })

  it('has a className of .drum-pad', () => {
    wrapper.hasClass('drum-pad').should.be.true
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

  it('has an innertext of props.id', () => {
    wrapper.text().should.equal(props.id)
  })

  it('should call the props.playKey function when clicked', () => {
    const fullMount = mount(<DrumPad {...props} />)
    fullMount.simulate('click')
    props.playKey.calledOnce.should.be.true
  })
})
