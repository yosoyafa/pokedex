import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Home from './Home'
import PokemonProvider from '../../context/PokemonContext'
import { pokemonList } from '../../../jest/mocks'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('Home', () => {
  it('renders correctly', () => {
    render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )
  })

  it('should apply the value when changing text', () => {
    const { getByTestId } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )

    const input = getByTestId('searchBar')
    fireEvent.changeText(input, '123')
    expect(input.props.value).toBe('123')
  })

  it('should show pokemons list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemonList),
      })
    ) as jest.Mock

    const { findByText } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />,
      { wrapper: PokemonProvider }
    )

    const label1 = await findByText('#1')
    expect(label1).not.toBe(null)
    const label2 = await findByText('#2')
    expect(label2).not.toBe(null)
    const label3 = await findByText('#3')
    expect(label3).not.toBe(null)
    const label4 = await findByText('#4')
    expect(label4).not.toBe(null)
    const label5 = await findByText('#5')
    expect(label5).not.toBe(null)
  })

  it('should filter the list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemonList),
      })
    ) as jest.Mock

    const { findByText, queryByText, getByTestId } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />,
      { wrapper: PokemonProvider }
    )

    const initialBulbasaurLabel = await findByText('#1')
    expect(initialBulbasaurLabel).not.toBe(null)
    const initialIvysaurLabel = await findByText('#2')
    expect(initialIvysaurLabel).not.toBe(null)

    const input = getByTestId('searchBar')
    fireEvent.changeText(input, 'bul')

    const filteredBulbasaurLabel = await findByText('#1')
    expect(filteredBulbasaurLabel).not.toBe(null)
    const filteredIvysaurLabel = queryByText('#2')
    expect(filteredIvysaurLabel).toBe(null)
  })
})
