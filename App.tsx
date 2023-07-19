import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { MainStack } from './src/navigation'
import PokemonProvider from './src/context/PokemonContext'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <PokemonProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainStack />
        </SafeAreaView>
      </PokemonProvider>
    </NavigationContainer>
  )
}

export default App
