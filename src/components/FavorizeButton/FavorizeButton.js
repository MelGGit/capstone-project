import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useRecoilState } from 'recoil'
import { favoritePodcastsState } from '../../states'
import podcasts from '../../test_data_space.json'
import { ReactComponent as Star } from '../../assets/star.svg'

FavorizeButton.propTypes = {
  id: PropTypes.number.isRequired,
}

export default function FavorizeButton({ id }) {
  const [favoritePodcasts, setFavoritePodcasts] = useRecoilState(
    favoritePodcastsState
  )

  const isFavorite = favoritePodcasts.some(podcast => podcast.id === id)

  return (
    <Button data-testid="favorize-button" onClick={handleClick}>
      <SVG isFavorite={isFavorite} />
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
      podcasts.find(podcast => podcast.id === id),
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

const SVG = styled(Star)`
  fill: ${props => (props.isFavorite ? '#fff209' : 'var(--darker-grey)')};
`
