import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'

export default function FavoritesPage({
  favoritePodcasts,
  onClickDetails,
  onClickBackFavorites,
}) {
  return (
    <PageContainer>
      <button onClick={onClickBackFavorites}>Back</button>
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
    </PageContainer>
  )
}

const PageContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
