import PropTypes from 'prop-types'
import { ReactComponent as Star } from '../../assets/star.svg'
import { favoritePodcastsState } from '../../states'
import styled from 'styled-components/macro'
import { useRecoilState } from 'recoil'

FavorizeButton.propTypes = {
  podcast: PropTypes.object.isRequired,
  addText: PropTypes.string.isRequired,
  removeText: PropTypes.string.isRequired,
}

export default function FavorizeButton({ podcast, addText, removeText }) {
  const [favoritePodcasts, setFavoritePodcasts] = useRecoilState(
    favoritePodcastsState
  )
  const { id } = podcast

  const isFavorite = favoritePodcasts.some(podcast => podcast.id === id)

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
    setFavoritePodcasts([podcast, ...favoritePodcasts])
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
