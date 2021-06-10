import styled from 'styled-components/macro'
import BackButton from '../../components/BackButton/BackButton'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import PodcastCard from '../../components/PodcastCard/PodcastCard'

export default function FavoritesPage({ favoritePodcasts, onClickDetails }) {
  return (
    <PageWrapper>
      <BackButton />
      {favoritePodcasts.map(({ image, title, id, author }) => (
        <PodcastCard
          key={id}
          image={image}
          title={title}
          author={author}
          id={id}
          onClickDetails={onClickDetails}
        />
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
