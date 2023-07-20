import React from 'react'
import { render } from '@testing-library/react-native'

import DetailsSection from './DetailsSection'
import { Text } from 'react-native'

describe('DetailsSection', () => {
  it('renders correctly', () => {
    render(
      <DetailsSection title="Title">
        <Text>Details</Text>
      </DetailsSection>
    )
  })

  it('renders title correctly', () => {
    const { queryByText } = render(
      <DetailsSection title="Title">
        <Text>Details</Text>
      </DetailsSection>
    )
    const titleLabel = queryByText('Title')
    expect(titleLabel).not.toBeNull()
  })

  it('renders content correctly', () => {
    const { queryByText } = render(
      <DetailsSection title="Title">
        <Text>Details</Text>
      </DetailsSection>
    )
    const content = queryByText('Details')
    expect(content).not.toBeNull()
  })
})
