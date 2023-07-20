import React from 'react'
import { render } from '@testing-library/react-native'

import SearchBar from './SearchBar'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('SearchBar', () => {
  it('renders correctly', () => {
    render(<SearchBar value={''} onChangeText={jest.fn()} />)
  })
})
