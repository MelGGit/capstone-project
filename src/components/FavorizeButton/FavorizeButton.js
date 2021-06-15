import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { favoritePodcastsState, searchedPodcastsState } from '../../states'
import { ReactComponent as Star } from '../../assets/star.svg'

FavorizeButton.propTypes = {
  id: PropTypes.number.isRequired,
}

export default function FavorizeButton({ id }) {
  const [favoritePodcasts, setFavoritePodcasts] = useRecoilState(
    favoritePodcastsState
  )
  const searchedPodcasts = useRecoilValue(searchedPodcastsState)

  const isFavorite = favoritePodcasts.some(podcast => podcast.id === id)

  return (
    <Button onClick={handleClick}>
      <SVG fill={isFavorite ? '#fff209' : 'var(--darker-grey)'} />
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  )

  function handleClick() {
    const index = favoritePodcasts.findIndex(podcast => podcast.id === id)
    if (!isFavorite) addPodcast()
    if (isFavorite) removePodcast(index)
  }

  function addPodcast() {
    setFavoritePodcasts([
      searchedPodcasts.find(podcast => podcast.id === id),
      ...favoritePodcasts,
    ])
  }

  function removePodcast() {
    setFavoritePodcasts(favoritePodcasts.filter(podcast => podcast.id !== id))
  }
}

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 1.5rem;
  background: none;
  border: none;
  color: inherit;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--darker-grey);
  }
`

const SVG = styled(Star)``
