import * as React from 'react'
import { shallow, ShallowWrapper } from "enzyme"
import './../../../setupEnzyme'
import App from './../../components/App'

let component: ShallowWrapper

it('App Component', () => {
  component = shallow(<App/>)
  expect(component).toHaveLength(1)
})