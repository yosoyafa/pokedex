import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import {
  PokemonContext,
  PokemonContextType,
} from '../../context/PokemonContext'

type PokemonCardProps = {
  number: number
  name: string
  onPress: () => void
}

const PokemonCard = ({
  number,
  name,
  onPress,
}: PokemonCardProps): JSX.Element => {
  const { getImage } = useContext(
    PokemonContext
  ) as PokemonContextType
  return (
    <TouchableOpacity onPress={onPress} style={styles.main}>
      <Image
        source={{
          uri: getImage(number),
        }}
        style={styles.image}
      />
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

export default PokemonCard
