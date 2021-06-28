import { Pause, Play } from 'react-feather'

import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

AudioControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
}

export default function AudioControls({ isPlaying, onPlayPauseClick }) {
  return (
    <ControlsContainer>
      {isPlaying ? (
        <Button onClick={() => onPlayPauseClick(false)}>
          <Pause
            color={'var(--white)'}
            size={24}
            strokeWidth={1}
            fill={'var(--white)'}
          />
        </Button>
      ) : (
        <Button onClick={() => onPlayPauseClick(true)}>
          <Play
            color="var(--white)"
            strokeWidth={1}
            size={24}
            fill={'var(--white)'}
          />
        </Button>
      )}
    </ControlsContainer>
  )
}

const ControlsContainer = styled.div`
  width: 100%;
`
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
`
