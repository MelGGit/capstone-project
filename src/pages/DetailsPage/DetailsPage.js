import DetailedPodcast from '../../components/DetailedPodcast/DetailedPodcast'
import EpisodeCardsList from '../../components/EpisodeCardsList/EpisodeCardsList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import styled from 'styled-components/macro'
import { useParams } from 'react-router'
import usePodcastByFeedId from '../../hooks/usePodcastByFeedId'

export default function DetailsPage() {
  const { id } = useParams()
  const { podcastByFeedId, isQuerying } = usePodcastByFeedId(id)

  if (isQuerying)
    return (
      <PageWrapper>
        <LoadingSpinner />
      </PageWrapper>
    )

  return (
    <PageWrapper>
      <DetailedPodcast podcast={podcastByFeedId.feed} />
      <h3>All Episodes</h3>
      <EpisodeCardsList id={id} />
    </PageWrapper>
  )
}
const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
