import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'
import { PageContainer } from '../../components/PageContainer/PageContainer'

PodcastListPage.propTypes = {
  podcasts: PropTypes.array.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  onClickFavorites: PropTypes.func.isRequired,
}

export default function PodcastListPage({
  podcasts,
  onClickDetails,
  onClickFavorites,
}) {
  return (
    <PageWrapper>
      <button onClick={onClickFavorites}>favorites</button>
      {podcasts.map(({ image, title, id, author }) => (
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
