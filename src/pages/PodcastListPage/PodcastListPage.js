import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import podcasts from '../../test_data_space.json'

export default function PodcastListPage() {
  return (
    <PageWrapper>
      {podcasts.map(podcast => (
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
