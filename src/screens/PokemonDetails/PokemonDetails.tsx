import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { PokemonDetailsScreenProps } from '../../navigation/MainStack/types'
import { capitalize, spritesToArray } from '../../utils'
import { Pokemon } from '../../types'
import { isEmpty, isNil } from 'ramda'
import styles from './styles'
import {
  PokemonContext,
  PokemonContextType,
} from '../../context/PokemonContext'
import { DetailsSection, LoadingPage } from '../../components'
import { useShowMore } from '../../hooks'

const PokemonDetails = ({
  navigation,
  route,
}: PokemonDetailsScreenProps): JSX.Element => {
  const { name } = route.params

  const { fetchSinglePokemon, getImage } = useContext(
    PokemonContext
  ) as PokemonContextType

  const [pokemon, setPokemon] = useState<Pokemon>()

  const scrollViewRef = useRef<ScrollView>(null)

  const loadPokemon = useCallback(async () => {
    const result = await fetchSinglePokemon(name)
    setPokemon(result)
  }, [name])

  useEffect(() => {
    loadPokemon()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({ title: capitalize(name) })
  }, [])

  const {
    text: moves,
    ShowMoreButton,
    isExpanded: isShowingAllMoves,
  } = useShowMore({
    list: pokemon?.moves.map(({ move: { name } }) => name),
  })

  if (isNil(pokemon)) {
    return <LoadingPage />
  }

  const { id, types, weight, sprites } = pokemon

  const mappedStripes = spritesToArray(sprites)

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        if (isShowingAllMoves) {
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      }}
    >
      <View style={styles.main}>
        <Image
          testID="image"
          source={{
            uri: getImage(id),
          }}
          style={styles.image}
        />
        <Text style={styles.title}>#{id}</Text>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        {!isEmpty(types) && (
          <DetailsSection title="Types">
            <Text style={styles.textList}>
              {types.map(({ type: { name } }) => name).join(', ')}
            </Text>
          </DetailsSection>
        )}
        {!isNil(weight) && (
          <DetailsSection title="Weight">
            <Text>{`${weight}kg`}</Text>
          </DetailsSection>
        )}
        {!isEmpty(sprites) && (
          <DetailsSection title="Sprites">
            <View style={styles.spritesContainer}>
              <FlatList
                testID="spritesList"
                contentContainerStyle={styles.spritesList}
                data={mappedStripes}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image
                    testID="sprite"
                    source={{ uri: item }}
                    style={styles.spriteImage}
                  />
                )}
              />
            </View>
          </DetailsSection>
        )}
        {!isEmpty(pokemon.moves) && (
          <DetailsSection title="Moves">
            <Text style={styles.textList}>{moves}</Text>
            <ShowMoreButton />
          </DetailsSection>
        )}
      </View>
    </ScrollView>
  )
}

export default PokemonDetails
