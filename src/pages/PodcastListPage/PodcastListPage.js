import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { currentSearchTermState } from '../../states'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import useSearchByTerm from '../../hooks/useSearchByTerm'
import { useSetRecoilState } from 'recoil'

export default function PodcastListPage() {
  const { id: term } = useParams()
  console.log(term)
  const { podcastsByTerm, isQuerying } = useSearchByTerm(term)
  const setCurrentSearchTerm = useSetRecoilState(currentSearchTermState)
  setCurrentSearchTerm(term)

  if (isQuerying)
    return (
      <PageWrapper>
        <LoadingSpinner />
      </PageWrapper>
    )

  return (
    <PageWrapper>
      {podcastsByTerm.feeds.map(podcast => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
