import React from 'react'
import { render } from '@testing-library/react-native'

import PokemonDetails from './PokemonDetails'
import PokemonProvider from '../../context/PokemonContext'
import { singlePokemon, pokemonList } from '../../../jest/mocks'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('PokemonDetails', () => {
  it('renders correctly', () => {
    render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />
    )
  })

  it('should show image, number and name correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })

    const { findByText, findByTestId } = render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />,
      { wrapper: PokemonProvider }
    )
    const image = await findByTestId('image')
    expect(image).not.toBe(null)
    const number = await findByText('#132')
    expect(number).not.toBe(null)
    const name = await findByText('Ditto')
    expect(name).not.toBe(null)
  })

  it('should show Types section correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })

    const { findByText } = render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />,
      { wrapper: PokemonProvider }
    )
    const title = await findByText('Types')
    expect(title).not.toBe(null)
    const types = await findByText('normal')
    expect(types).not.toBe(null)
  })

  it('should show Weight section correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })

    const { findByText } = render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />,
      { wrapper: PokemonProvider }
    )
    const title = await findByText('Weight')
    expect(title).not.toBe(null)
    const weight = await findByText('40kg')
    expect(weight).not.toBe(null)
  })

  it('should show Sprites section correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })

    const { findByText, findByTestId, findAllByTestId } = render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />,
      { wrapper: PokemonProvider }
    )
    const title = await findByText('Sprites')
    expect(title).not.toBe(null)
    const list = await findByTestId('spritesList')
    expect(list).not.toBe(null)
    const sprites = await findAllByTestId('sprite')
    expect(sprites.length).toBe(4)
  })

  it('should show Moves section correctly', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })

    const { findByText } = render(
      <PokemonDetails
        navigation={
          { navigate: jest.fn(), setOptions: jest.fn() } as any
        }
        route={{
          key: 'details',
          name: 'PokemonDetails',
          params: { name: 'Ditto' },
        }}
      />,
      { wrapper: PokemonProvider }
    )
    const title = await findByText('Moves')
    expect(title).not.toBe(null)
    const moves = await findByText('transform')
    expect(moves).not.toBe(null)
  })
})
