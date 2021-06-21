import { PageContainer } from '../../components/PageContainer/PageContainer'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { favoritePodcastsState } from '../../states'
import styled from 'styled-components/macro'
import { useRecoilValue } from 'recoil'

export default function FavoritesPage() {
  const favoritePodcasts = useRecoilValue(favoritePodcastsState)

  return (
    <PageWrapper>
      {favoritePodcasts.map(podcast => (
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
