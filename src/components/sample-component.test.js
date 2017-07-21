import React from 'react'
import renderer from 'react-test-renderer'

import SampleComponent from './sample-component'

test('Sample component renders without errors', () => {
  const component = renderer.create(
    <SampleComponent />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
