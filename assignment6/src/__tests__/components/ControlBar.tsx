import * as React from 'react'
import ControlBar from './../../components/ControlBar'
import * as renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

const mockFunc = jest.fn()

test('Control bar view changes on date change', () => {
  const component = renderer.create(
    <StaticRouter location="someLocation" context={{}}>
      <ControlBar dateChange={mockFunc}/>
    </StaticRouter>
  )

  let tree = component.toJSON()
  expect(tree.children).toHaveLength(3)
});