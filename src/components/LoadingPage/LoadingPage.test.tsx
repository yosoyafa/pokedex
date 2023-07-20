import React from 'react'
import { render } from '@testing-library/react-native'

import LoadingPage from './LoadingPage'

describe('LoadingPage', () => {
  it('renders correctly', () => {
    render(<LoadingPage />)
  })

  it('shows spinner correctly', () => {
    const { getByTestId } = render(<LoadingPage />)
    const spinner = getByTestId('spinner')
    expect(spinner).not.toBeNull()
  })
})
