import { useRecoilValue } from 'recoil'
import styled from 'styled-components/macro'
import BackButton from '../../components/BackButton/BackButton'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { favoritePodcastsState } from '../../states'

export default function FavoritesPage() {
  const favoritePodcasts = useRecoilValue(favoritePodcastsState)

  return (
    <PageWrapper>
      <BackButton />
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
