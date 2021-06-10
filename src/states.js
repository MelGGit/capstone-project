import { atom } from 'recoil'

export const favoritePodcastsState = atom({
  key: 'favoritePodcasts',
  default: [],
})

export const detailedPodcastState = atom({
  key: 'detailedPodcastState',
  default: {},
})
