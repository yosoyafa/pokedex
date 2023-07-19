export type BasicData = {
  name: string
  url: string
}

export type SimplePokemon = BasicData

export type PokemonList = {
  count: number
  next: string | null
  previous: string | null
  results: BasicData[]
}

type Move = {
  move: BasicData
  version_group_details: {
    level_learned_at: number
    move_learn_method: BasicData
    version_group: BasicData
  }
}

export type Sprites = Record<string, string | Record<string, string>>

export type Pokemon = {
  abilities: {
    ability: BasicData
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  forms: BasicData[]
  game_indices: {
    game_index: number
    version: BasicData
  }[]
  height: number
  held_items: BasicData[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_types: any[]
  species: BasicData
  sprites: Sprites
  stats: {
    base_stat: number
    effort: number
    stat: BasicData
  }[]
  types: {
    slot: number
    type: BasicData
  }[]
  weight: number
}
