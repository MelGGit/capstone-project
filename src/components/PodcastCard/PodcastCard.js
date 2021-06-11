import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import { useSetRecoilState } from 'recoil'
import { detailedPodcastState } from '../../states'
import { useHistory } from 'react-router'

PodcastCard.propTypes = {
  podcast: PropTypes.object.isRequired,
}

export default function PodcastCard({ podcast }) {
  const { image, title, author } = podcast
  const { push } = useHistory()
  const setDetailedPodcast = useSetRecoilState(detailedPodcastState)

  return (
    <Card data-testid="card" onClick={handleClick}>
      <LazyLoad height={48} offset={96} overflow={true} debounce once>
        <ImageContainer>
          <Image src={image} alt={'Poster'} width="48px" height="48px" />
        </ImageContainer>
      </LazyLoad>
      <InnerLayoutContainer>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </InnerLayoutContainer>
      <SVG
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
      >
        <path d="M10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 6c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 18c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
      </SVG>
    </Card>
  )

  function handleClick() {
    setDetailedPodcast(podcast)
    push('/details')
  }
}

const Card = styled.section`
  display: grid;
  grid-template-columns: 3rem 1fr 1rem;
  height: 3rem;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1.5rem 0 1rem;
  cursor: pointer;
`
const ImageContainer = styled.div`
  height: 3rem;
  width: 3rem;
`

const InnerLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 0.3rem;
`

const Image = styled.img`
  height: 3rem;
  width: 3rem;
  font-size: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const Author = styled.h3`
  font-size: 0.8rem;
  font-weight: 100;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
  color: var(--darker-grey);
`

const Title = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
`
const SVG = styled.svg`
  fill: var(--darker-grey);
`
