import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  PokemonDetails: {
    name: string
  }
}

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>

export type PokemonDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'PokemonDetails'
>
