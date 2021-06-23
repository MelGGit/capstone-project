import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import PropTypes from 'prop-types'
import SideScrollerPodcastItem from '../SideScrollerPodcastItem/SideScrollerPodcastItem'
import styled from 'styled-components/macro'

SideScroller.propTypes = {
  array: PropTypes.array,
  isQuerying: PropTypes.bool,
}

export default function SideScroller({ array, isQuerying }) {
  if (isQuerying) return <LoadingSpinner />

  return (
    <List>
      {array.map(el => (
        <li key={el.id}>
          <SideScrollerPodcastItem podcast={el} />
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
