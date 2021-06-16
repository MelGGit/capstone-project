import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchedPodcastsByTermState } from '../states'

export default function useApi() {
  const [isQuerying, setIsQuerying] = useState(false)
  const setSearchedPodcastsByTerm = useSetRecoilState(
    searchedPodcastsByTermState
  )

  async function searchPodcastsByTerm() {
    setIsQuerying(true)
    const res = await fetch('/api/byTerm/deutschlandfunk')
    const resData = await res.json()
    setIsQuerying(false)
    setSearchedPodcastsByTerm(resData.feeds)
  }

  const api = {
    searchPodcastsByTerm,
  }

  return [isQuerying, api]
}
