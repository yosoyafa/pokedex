import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, PokemonDetails } from '../../screens'
import { MainStackParamList } from './types'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'List of Pokemons' }}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
