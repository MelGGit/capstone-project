import { atom } from 'recoil'

export const searchedPodcastsByTermState = atom({
  key: 'searchedPodcastsByTerm',
  default: [],
})

export const favoritePodcastsState = atom({
  key: 'favoritePodcasts',
  default: [],
})

export const detailedPodcastState = atom({
  key: 'detailedPodcastState',
  default: {},
})
