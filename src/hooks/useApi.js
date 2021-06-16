import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentSearchTermState, searchedPodcastsByTermState } from '../states'

export default function useApi() {
  // is used to track query call If it is true a loading screen is shown
  const [isQuerying, setIsQuerying] = useState(false)
  const setSearchedPodcastsByTerm = useSetRecoilState(
    searchedPodcastsByTermState
  )
  const currentSearchTerm = useRecoilValue(currentSearchTermState)

  // search a podcast with a specific term
  async function searchPodcastsByTerm() {
    setIsQuerying(true)
    const res = await fetch('/api/byTerm/' + currentSearchTerm)
    const resData = await res.json()
    setIsQuerying(false)
    // updates the searched podcasts in he global state
    setSearchedPodcastsByTerm(resData.feeds)
  }

  // with this object it is possible to call different functions in this hook
  const api = {
    searchPodcastsByTerm,
  }

  return [isQuerying, api]
}
