import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import useApi from '../../hooks/useApi'
import { searchedPodcastsByTermState } from '../../states'

export default function PodcastListPage() {
  const searchedPodcastsByTerm = useRecoilValue(searchedPodcastsByTermState)
  const [isQuerying, api] = useApi()

  useEffect(() => {
    api.searchPodcastsByTerm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const [isLoading, setisLoading] = useState(true)

  // useEffect(() => {
  //   setisLoading(true)
  //   async function getData() {
  //     const response = await fetch('/api/byTerm/deutschlandfunk')
  //     const responseBody = await response.json()
  //     setSearchedPodcasts(responseBody.feeds)
  //     setisLoading(false)
  //   }
  //   getData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  console.log(searchedPodcastsByTerm)

  return (
    <PageWrapper>
      {isQuerying ? (
        <LoadingSpinner />
      ) : (
        searchedPodcastsByTerm.map(podcast => (
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
