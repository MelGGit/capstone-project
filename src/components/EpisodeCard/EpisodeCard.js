import { useResetRecoilState, useSetRecoilState } from 'recoil'

import DOMpurify from 'dompurify'
import LazyLoad from 'react-lazyload'
import { Play } from 'react-feather'
import PropTypes from 'prop-types'
import { playState } from '../../states'
import styled from 'styled-components/macro'

EpisodeCard.propTypes = {
  episode: PropTypes.object.isRequired,
  author: PropTypes.string,
}

export default function EpisodeCard({ episode, author }) {
  const { datePublished, duration } = episode
  const setPlay = useSetRecoilState(playState)
  const resetPlay = useResetRecoilState(playState)

  const dateFormat = getDate(datePublished)
  const time = Math.floor(duration / 60)

  return (
    <Card>
      <ImageAndTitleContainer>
        <LazyLoad height={48} width={48} offset={96} overflow={true} once>
          <ImageContainer>
            <Image
              src={episode.feedImage}
              alt={'Poster'}
              width="48"
              height="48"
            />
          </ImageContainer>
        </LazyLoad>

        <Title>{episode.title}</Title>
      </ImageAndTitleContainer>
      <Description
        dangerouslySetInnerHTML={{
          __html: DOMpurify.sanitize(episode.description),
        }}
      />

      <BottomContainer>
        <Span>{`${dateFormat} ${
          duration ? `● ${time === 0 ? 1 : time} min.` : ''
        }`}</Span>
        <PlayButton onClick={handleClick}>
          <Play
            fill={'var(--black'}
            strokeWidth={1}
            color={'car(--white'}
            height={12}
          />
        </PlayButton>
      </BottomContainer>
    </Card>
  )
  function handleClick() {
    const playObject = {
      image: episode.feedImage,
      title: episode.title,
      author,
      audioSrc: episode.enclosureUrl,
    }
    resetPlay()
    setPlay(playObject)
  }

  function getDate(date) {
    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ]
    const dateUnformat = new Date(date * 1000)
    const newDate = `${dateUnformat.getDate()} ${
      months[dateUnformat.getMonth()]
    } ${dateUnformat.getFullYear()}`

    return newDate
  }
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--darkest-grey);
  width: 100%;
`
const ImageAndTitleContainer = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  gap: 0.7rem;
`
const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
`
const Image = styled.img``
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const Description = styled.p`
  font-weight: 100;
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: anywhere;
  overflow: hidden;
  color: var(--darker-grey);
  height: 2rem;
  line-height: 1rem;
`
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const PlayButton = styled.button`
  display: grid;
  place-items: center;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  padding: 0.2rem 0.2rem 0.2rem 0.05rem;
`

const Span = styled.span`
  font-weight: 100;
  font-size: 0.8rem;
  color: var(--darker-grey);
`
