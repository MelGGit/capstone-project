import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import PropTypes from 'prop-types'
import SideScrollerPodcastItem from '../SideScrollerPodcastItem/SideScrollerPodcastItem'
import styled from 'styled-components/macro'
import useTrending from '../../hooks/useTrending'

SideScroller.propTypes = {
  term: PropTypes.string.isRequired,
}

export default function SideScroller({ term }) {
  const { trending, isQuerying } = useTrending(term)

  if (isQuerying) return <LoadingSpinner />

  return (
    <List>
      {trending.feeds.map(podcast => (
        <li key={podcast.id}>
          <SideScrollerPodcastItem podcast={podcast} />
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.7rem;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`
