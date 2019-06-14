/* global describe, it */
import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import App from './App'
import DrumMachine from './DrumMachine'

chai.should()

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('renders a <DrumMachine /> component', () => {
    const wrapper = shallow(<App />)
    wrapper.contains(<DrumMachine />).should.equal(true)
  })
})
