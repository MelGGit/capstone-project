import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

FavorizeButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default function FavorizeButton({ isFavorite, onToggleFavorite, id }) {
  return (
    <Button data-testid="favorize-button" onClick={() => onToggleFavorite(id)}>
      <SVG
        isFavorite={isFavorite}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
      >
        <title>Star</title>
        <path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path>
      </SVG>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 1.5rem;
  background: none;
  border: none;
  color: inherit;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--darker-grey);
  }
`

const SVG = styled.svg`
  fill: ${props => (props.isFavorite ? '#fff209' : 'var(--darker-grey)')};
  height: inherit;
`
