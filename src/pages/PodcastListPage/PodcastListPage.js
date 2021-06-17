import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { useParams } from 'react-router-dom'
import useSearchByTerm from '../../hooks/useSearchByTerm'

export default function PodcastListPage() {
  const { id: term } = useParams()
  const { podcastsByTerm, isQuerying } = useSearchByTerm(term)

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
