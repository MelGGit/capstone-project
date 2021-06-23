import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SideScrollerItem.propTypes = {
  podcast: PropTypes.object,
}

export default function SideScrollerItem({ podcast }) {
  return (
    <Container>
      <StyledLink to={`/podcast/${podcast.id}`}>
        <Image
          loading={'lazy'}
          width={128}
          height={128}
          src={podcast.image}
          alt={`Poster of ${podcast.title}`}
        />
        <Title>{podcast.title}</Title>
        <Author>{podcast.author}</Author>
      </StyledLink>
    </Container>
  )
}

const Container = styled.section`
  width: 8rem;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`

const Image = styled.img`
  border-radius: 20px;
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
