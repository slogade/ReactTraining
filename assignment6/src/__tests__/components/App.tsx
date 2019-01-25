import * as React from 'react'
import * as renderer from 'react-test-renderer'
import App from './../../components/App'
import store from './../../store'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

let component: renderer.ReactTestRenderer

describe('App component should render both child elements', () => {
  component = renderer.create(
    <Provider store={store}>
      <StaticRouter location="someLocation" context={{}}>
        <App/>
      </StaticRouter>
    </Provider>
  )

  it('Should render ControlBar as child', () => {
    let {children} = component.toJSON()
    expect(children[0].props.className).toBe('control-bar')
  })

  it('Should render EventList as child', () => {
    let {children} = component.toJSON()
    expect(children.length).toBe(2)
  })
})
