import PropTypes from 'prop-types'
import { ReactComponent as Star } from '../../assets/star.svg'
import { favoritePodcastsState } from '../../states'
import styled from 'styled-components/macro'
import { useRecoilState } from 'recoil'

FavorizeButton.propTypes = {
  id: PropTypes.number.isRequired,
  addText: PropTypes.string,
  removeText: PropTypes.string,
}

export default function FavorizeButton({ id, addText, removeText }) {
  const [favoritePodcasts, setFavoritePodcasts] = useRecoilState(
    favoritePodcastsState
  )

  const isFavorite = favoritePodcasts.some(favoriteId => favoriteId === id)

  return (
    <Button onClick={handleClick}>
      <SVG fill={isFavorite ? '#fff209' : 'var(--darker-grey)'} />
      {isFavorite ? removeText : addText}
    </Button>
  )

  function handleClick() {
    const index = favoritePodcasts.findIndex(podcast => podcast.id === id)
    if (!isFavorite) addPodcast()
    if (isFavorite) removePodcast(index)
  }

  function addPodcast() {
    setFavoritePodcasts([id, ...favoritePodcasts])
  }

  function removePodcast() {
    setFavoritePodcasts(
      favoritePodcasts.filter(favoriteId => favoriteId !== id)
    )
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
