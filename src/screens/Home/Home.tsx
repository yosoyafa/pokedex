import React, { useContext, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { getNumber } from '../../utils'
import { PokemonCard, SearchBar } from '../../components'
import { HomeScreenProps } from '../../navigation/MainStack/types'
import { isEmpty, isNil } from 'ramda'
import {
  PokemonContext,
  PokemonContextType,
} from '../../context/PokemonContext'
import styles from './styles'

const Home = ({ navigation }: HomeScreenProps): JSX.Element => {
  const { pokemons, fetchSinglePokemon, fetchMore, addPokemon } =
    useContext(PokemonContext) as PokemonContextType

  const [searchTerm, setSearchTerm] = useState<string>('')

  const onSearch = async (text: string) => {
    if (!isEmpty(text) && isEmpty(filteredPokemons)) {
      const result = await fetchSinglePokemon(text)
      if (!isNil(result)) {
        addPokemon(result)
      }
    }
  }

  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm])

  const filteredPokemons = !isEmpty(searchTerm)
    ? pokemons.filter(
        ({ name, url }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${getNumber(url)}` === searchTerm
      )
    : pokemons

  return (
    <View style={styles.main}>
      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchBar}
        placeholder="Search"
        autoFocus={false}
        testID="searchBar"
      />
      <FlatList
        data={filteredPokemons}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        onEndReachedThreshold={0.6}
        onEndReached={fetchMore}
        renderItem={({ item: { name, url } }) => (
          <View style={styles.cardContainer}>
            <PokemonCard
              number={getNumber(url)}
              name={name}
              onPress={() =>
                navigation.navigate('PokemonDetails', { name })
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  )
}

export default Home
