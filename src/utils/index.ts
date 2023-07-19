import { is } from 'ramda'
import { SimplePokemon, Pokemon, Sprites } from '../types'

export const request = async <TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> => {
  try {
    const response = await fetch(url, config)
    return (await response.json()) as TResponse
  } catch (error) {
    return undefined as TResponse
  }
}

export const getNumber = (url: string): number =>
  +url.split('/').slice(-2, -1)[0]

export const capitalize = (pre: string): string =>
  pre
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

export const spritesToArray = (sprites: Sprites) =>
  Object.entries(sprites)
    .map((sprite) => sprite[1])
    .filter((sprite) => is(String, sprite)) as string[]

export const simplifyPokemon = ({ name, id }: Pokemon) => ({
  name,
  url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
})

export const removeDups = (
  pokemons: SimplePokemon[]
): SimplePokemon[] =>
  pokemons.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.url === value.url && t.name === value.name
      )
  )

export const sort = (pokemons: SimplePokemon[]): SimplePokemon[] =>
  pokemons.sort((a, b) => getNumber(a.url) - getNumber(b.url))
