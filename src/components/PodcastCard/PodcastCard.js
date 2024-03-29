import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import { ReactComponent as Dots } from '../../assets/dots-horizontal-triple.svg'
import { Link } from 'react-router-dom'

PodcastCard.propTypes = {
  podcast: PropTypes.object.isRequired,
}

export default function PodcastCard({ podcast }) {
  const { image, title, author, id } = podcast

  return (
    <Card>
      <StyledLink to={`/podcast/${id}`}>
        <LazyLoad height={48} offset={96} overflow={true} debounce once>
          <ImageContainer>
            <Image src={image} alt={'Poster'} width="48px" height="48px" />
          </ImageContainer>
        </LazyLoad>
        <InnerLayoutContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </InnerLayoutContainer>
      </StyledLink>
      <SVG />
    </Card>
  )
}

const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 1rem;
  height: 3rem;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1.5rem 0 1rem;
  cursor: pointer;
`
const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 3rem 1fr;
  height: 3rem;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
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
const SVG = styled(Dots)`
  fill: var(--darker-grey);
  align-self: center;
`
