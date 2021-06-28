import { atom } from 'recoil'

export const searchedPodcastsByTermState = atom({
  key: 'searchedPodcastsByTerm',
  default: [],
})

export const currentSearchTermState = atom({
  key: 'currentSearchTerm',
  default: '',
})

export const favoritePodcastsState = atom({
  key: 'favoritePodcasts',
  default: [],
})

export const playState = atom({
  key: 'play',
  default: null,
})
