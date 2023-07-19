import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import { Pokemon, PokemonList, SimplePokemon } from '../types'
import { removeDups, request, simplifyPokemon, sort } from '../utils'
import { isNil } from 'ramda'

export type PokemonContextType = {
  pokemons: SimplePokemon[]
  fetchMore: () => void
  fetchSinglePokemon: (name: string) => Promise<Pokemon | undefined>
  addPokemon: (pokemon: Pokemon) => void
  getImage: (id: number) => string
}

export const PokemonContext =
  createContext<PokemonContextType | null>({
    pokemons: [],
    fetchMore: () => null,
    fetchSinglePokemon: async () => undefined,
    addPokemon: () => null,
    getImage: () => '',
  })

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([])
  const [nextPage, setNextPage] = useState<string | null>(null)

  const fetchPokemons = async (url: string) => {
    const { results, next } = await request<PokemonList>(url)
    setPokemons([...pokemons, ...results])
    setNextPage(next)
  }

  const fetchSinglePokemon = async (name: string) => {
    const result = await request<Pokemon | undefined>(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    )
    return result
  }

  const fetchMore = () => {
    if (!isNil(nextPage)) {
      fetchPokemons(nextPage)
    }
  }

  const addPokemon = (pokemon: Pokemon) => {
    setPokemons([...pokemons, simplifyPokemon(pokemon)])
  }

  const getImage = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  useEffect(() => {
    fetchPokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    )
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        pokemons: removeDups(sort(pokemons)),
        fetchMore,
        fetchSinglePokemon,
        getImage,
        addPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
