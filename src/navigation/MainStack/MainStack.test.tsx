import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent } from '@testing-library/react-native'

import MainStack from '../MainStack'
import PokemonProvider from '../../context/PokemonContext'
import { pokemonList, singlePokemon } from '../../../jest/mocks'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('MainStack (navigation)', () => {
  it('should take you to details screen on tapping a pokemon', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonList),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(singlePokemon),
      })

    const { findByText, findByTestId } = render(
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>,
      { wrapper: PokemonProvider }
    )

    const card = await findByText('#1')
    fireEvent.press(card)

    const image = await findByTestId('image')
    expect(image).not.toBe(null)
  })
})
