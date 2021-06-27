import { useEffect, useRef, useState } from 'react'

import AudioControls from '../AudioControls/AudioControls.js'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

AudioPlayer.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  audioSrc: PropTypes.string,
}

export default function AudioPlayer({ image, title, author, audioSrc }) {
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const audioRef = useRef(new Audio(audioSrc))
  const intervalRef = useRef()

  const { duration } = audioRef.current

  // some setup before playing
  useEffect(() => {
    setProgress(audioRef.current.currentTime)

    if (isReady) {
      setIsPlaying(true)
      startTimer()
    }
    if (!isReady) setIsReady(true)
  }, [isReady])

  // handle changes when clicking play and pause button
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    }
    if (!isPlaying) {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  // cleanup when closing or switching audioSrc
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <AudioContainer>
      <Progressbar
        type="range"
        readOnly
        value={progress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`} // duration is NaN at first
      />
      <TrackInfo>
        <Image src={image} alt={`track artork for ${title} by ${author}`} />
        <TitleAndAuthorContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </TitleAndAuthorContainer>
      </TrackInfo>
      <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
    </AudioContainer>
  )

  function startTimer() {
    // clear any timers
    clearInterval(intervalRef.current)

    // Pause when audio has ended and if not has ended update the progress bar
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) audioRef.current.pause()
      if (!audioRef.current.ended) setProgress(audioRef.current.currentTime)
      // this function should run every second
    }, [1000])
  }
}

const AudioContainer = styled.div`
  background: var(--black-accent);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2rem;
  align-items: center;
  position: relative;
`

const Progressbar = styled.input`
  position: absolute;
  -webkit-appearance: none;
  background: transparent;
  height: 0.1rem;
  top: -0.15rem;
  left: 0;
  width: 100%;
  z-index: 10;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    opacity: 0;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    opacity: 0;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    background: var(--darkest-grey);
    border-color: transparent;
    color: transparent;
  }

  &::-moz-range-track {
    background: var(--darkest-grey);
  }

  &::-moz-range-progress {
    background: var(--white);
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: var(--darkest-grey);
    border-color: transparent;
    color: transparent;
  }
  &::-webkit-slider-thumb {
    opacity: 0;
    -webkit-appearance: none;
  }
  &:focus::-webkit-slider-runnable-track {
    background: none;
  }

  &::-ms-fill-lower {
    background: var(--white);
  }
  &::-ms-fill-upper {
    background: var(--white);
  }

  &:focus::-ms-fill-lower {
    background: none;
  }
  &:focus::-ms-fill-upper {
    background: none;
  }
`

const TrackInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`
const TitleAndAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
`
const Image = styled.img`
  display: block;
  height: 3rem;
`
const Title = styled.h2`
  font-size: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: anywhere;
  overflow: hidden;
`
const Author = styled.h3`
  color: var(--darker-grey);
  font-weight: 100;
  font-size: 0.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: anywhere;
  overflow: hidden;
`
