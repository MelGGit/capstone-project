import EpisodeCard from '../EpisodeCard/EpisodeCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import useEpisodesByFeedId from '../../hooks/useEpisodesByFeedId'

EpisodeCardsList.propTypes = {
  id: PropTypes.number.isRequired,
}

export default function EpisodeCardsList({ id }) {
  const { episodesByFeedId, isQuerying } = useEpisodesByFeedId(id)

  if (isQuerying) {
    return <LoadingSpinner />
  }

  return (
    <EpisodeList>
      {episodesByFeedId.items.map(episode => (
        <li key={episode.id}>
          <EpisodeCard episode={episode} />
        </li>
      ))}
    </EpisodeList>
  )
}

const EpisodeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`
