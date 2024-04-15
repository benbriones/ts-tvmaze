

type tShowData = {
  show: {
    id: number,
    image: {medium: string} | null,
    name: string,
    summary: string
  }
}

// utility types or intersection operator

type tShow = {
  id: number,
  image: string,
  name: string,
  summary: string
}

type tEpisodes = {
  name: string,
  season: number,
  number: number
}

type tEpisodeWithId = {
  id: number,
  name: string,
  season: number,
  number: number
}

export type {tShow, tEpisodes, tEpisodeWithId, tShowData};