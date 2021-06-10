import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import podcasts from '../../test_data_space.json'

PodcastListPage.propTypes = {
  onClickFavorites: PropTypes.func.isRequired,
}

export default function PodcastListPage({ onClickFavorites }) {
  return (
    <PageWrapper>
      <button onClick={onClickFavorites}>favorites</button>
      {podcasts.map(podcast => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled(PageContainer)`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
