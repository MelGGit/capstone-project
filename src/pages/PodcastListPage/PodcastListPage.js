import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchedPodcastsState } from '../../states'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

export default function PodcastListPage() {
  const [searchedPodcasts, setSearchedPodcasts] = useRecoilState(
    searchedPodcastsState
  )
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setisLoading(true)
    async function getData() {
      const response = await fetch('/api/byTerm/deutschlandfunk')
      const responseBody = await response.json()
      setSearchedPodcasts(responseBody.feeds)
      setisLoading(false)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        searchedPodcasts.map(podcast => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))
      )}
    </PageWrapper>
  )
}

const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
