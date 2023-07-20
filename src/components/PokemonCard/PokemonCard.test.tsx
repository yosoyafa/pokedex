import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import PokemonCard from './PokemonCard'

describe('PokemonCard', () => {
  it('renders correctly', () => {
    render(
      <PokemonCard number={1} name="Bulbasaur" onPress={jest.fn()} />
    )
  })

  it('shows number correctly', () => {
    const { queryByText } = render(
      <PokemonCard number={1} name="Bulbasaur" onPress={jest.fn()} />
    )
    const numberLabel = queryByText('#1')
    expect(numberLabel).not.toBeNull()
  })

  it('shows name correctly', () => {
    const { queryByText } = render(
      <PokemonCard number={1} name="Bulbasaur" onPress={jest.fn()} />
    )
    const nameLabel = queryByText('Bulbasaur')
    expect(nameLabel).not.toBeNull()
  })

  it('runs onPress function correctly', () => {
    const onPress = jest.fn()
    const { getByTestId } = render(
      <PokemonCard number={1} name="Bulbasaur" onPress={onPress} />
    )

    const card = getByTestId('card')
    fireEvent.press(card)
    expect(onPress).toHaveBeenCalled()
  })
})
